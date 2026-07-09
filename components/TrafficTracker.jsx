"use client";

import { useEffect } from "react";

const ENDPOINT = "https://analytics.159-65-53-130.sslip.io/collect";

function getOrCreateId(key) {
  try {
    const existing = window.localStorage.getItem(key);
    if (existing) return existing;
    const id =
      typeof window.crypto?.randomUUID === "function"
        ? window.crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    window.localStorage.setItem(key, id);
    return id;
  } catch {
    return "anonymous";
  }
}

function utm(name) {
  return new URLSearchParams(window.location.search).get(name) || "";
}

function trackPageView() {
  if (typeof window === "undefined") return;

  const payload = {
    host: window.location.hostname,
    path: `${window.location.pathname}${window.location.search}`,
    url: window.location.href,
    title: document.title,
    referrer: document.referrer,
    visitorId: getOrCreateId("mark_traffic_visitor_id"),
    sessionId: getOrCreateId("mark_traffic_session_id"),
    utm_source: utm("utm_source"),
    utm_medium: utm("utm_medium"),
    utm_campaign: utm("utm_campaign"),
  };

  const body = JSON.stringify(payload);

  fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {
    if (navigator.sendBeacon) {
      navigator.sendBeacon(ENDPOINT, new Blob([body], { type: "application/json" }));
    }
  });
}

export default function TrafficTracker() {
  useEffect(() => {
    trackPageView();
  }, []);

  return null;
}
