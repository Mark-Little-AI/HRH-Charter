import { Jost, Spectral } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500"]
});

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-spectral",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"]
});

export const metadata = {
  metadataBase: new URL("https://charterfarms.co.uk"),
  title: {
    default: "CHARTER | The Future Standard For Regenerative Meat",
    template: "%s | CHARTER"
  },
  description:
    "A farmer owned company building the first outcomes based standard for regenerative meat. Measured in the field. Visible on the pack.",
  openGraph: {
    title: "CHARTER | The Future Standard For Regenerative Meat",
    description:
      "A farmer owned company building a measurable, transparent standard for regenerative meat.",
    url: "https://charterfarms.co.uk",
    siteName: "CHARTER",
    images: [
      {
        url: "/assets/og-charter.png",
        width: 1200,
        height: 630,
        alt: "CHARTER regenerative farming with brand wordmark"
      }
    ],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "CHARTER | The Future Standard For Regenerative Meat",
    description: "Measured in the field. Visible on the pack.",
    images: ["/assets/og-charter.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable} ${spectral.variable}`}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
