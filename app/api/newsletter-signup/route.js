import { createSign } from "node:crypto";
import { NextResponse } from "next/server";

const SHEET_ID = "1QWAziACnHsHrGSEiwy4b6ugoI66r8DoUfYmyYHTiV_w";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(data, init) {
  return NextResponse.json(data, init);
}

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim();
  return request.headers.get("x-real-ip") || "";
}

function buildRow({ email, source, page, request }) {
  return {
    timestamp: new Date().toISOString(),
    email,
    source: source || "newsletter",
    page: page || "",
    userAgent: request.headers.get("user-agent") || "",
    referrer: request.headers.get("referer") || "",
    ip: getClientIp(request)
  };
}

async function postToWebhook(row) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) return null;

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ sheetId: SHEET_ID, ...row })
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Google Sheets webhook failed: ${response.status} ${detail}`.trim());
  }

  return { mode: "webhook" };
}

async function postWithServiceAccount(row) {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetName = process.env.GOOGLE_SHEETS_TAB || "Sheet1";

  if (!clientEmail || !privateKey) return null;

  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(JSON.stringify({
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600
  })).toString("base64url");
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${payload}`);
  signer.end();
  const signature = signer.sign(privateKey).toString("base64url");
  const assertion = `${header}.${payload}.${signature}`;

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion })
  });

  if (!tokenResponse.ok) {
    const detail = await tokenResponse.text().catch(() => "");
    throw new Error(`Google auth failed: ${tokenResponse.status} ${detail}`.trim());
  }

  const { access_token: accessToken } = await tokenResponse.json();
  const values = [[row.timestamp, row.email, row.source, row.page, row.referrer, row.userAgent, row.ip]];
  const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(sheetName)}!A:G:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const appendResponse = await fetch(appendUrl, {
    method: "POST",
    headers: {
      authorization: `Bearer ${accessToken}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({ values })
  });

  if (!appendResponse.ok) {
    const detail = await appendResponse.text().catch(() => "");
    throw new Error(`Google Sheets append failed: ${appendResponse.status} ${detail}`.trim());
  }

  return { mode: "service-account" };
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const email = String(body.email || "").trim().toLowerCase();

    if (!email) {
      return json({ error: "Email is required." }, { status: 400 });
    }

    if (!EMAIL_PATTERN.test(email)) {
      return json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const row = buildRow({
      email,
      source: String(body.source || "newsletter").slice(0, 80),
      page: String(body.page || "").slice(0, 200),
      request
    });

    const result = (await postToWebhook(row)) || (await postWithServiceAccount(row));

    if (!result) {
      console.error("newsletter-signup is missing Google Sheets configuration");
      return json(
        { error: "Sorry, sign up is temporarily unavailable. Please try again later." },
        { status: 503 }
      );
    }

    return json({ ok: true });
  } catch (error) {
    console.error("newsletter-signup failed", error);
    return json({ error: "Sorry, we could not save that email. Please try again." }, { status: 500 });
  }
}
