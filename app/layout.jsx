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
    default: "CHARTER | BETTER BEEF",
    template: "%s | CHARTER"
  },
  description:
    "The new standard for British regenerative meat, defined by the farmers doing the work.",
  openGraph: {
    title: "CHARTER | The Future Standard For Regenerative Meat",
    description:
      "The new standard for British regenerative meat, defined by the farmers doing the work.",
    url: "https://charterfarms.co.uk",
    siteName: "CHARTER",
    images: [
      {
        url: "/og-charter.png",
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
    title: "CHARTER | BETTER BEEF",
    description: "The new standard for British regenerative meat, defined by the farmers doing the work.",
    images: ["/og-charter.png"]
  },
  icons: {
    icon: [
      {
        url: "/charter-nib.svg",
        type: "image/svg+xml"
      }
    ],
    shortcut: "/charter-nib.svg",
    apple: "/charter-nib.svg"
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
