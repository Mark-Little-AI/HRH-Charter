import { Jost, Spectral } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";
import TrafficTracker from "@/components/TrafficTracker";

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
    default: "CHARTER | The New Standard For Regenerative Meat",
    template: "%s | CHARTER"
  },
  description:
    "Celebrating the fifth quarter and the cuts that deserve to be on our plate.",
  openGraph: {
    title: "CHARTER | The New Standard For Regenerative Meat",
    description:
      "Celebrating the fifth quarter and the cuts that deserve to be on our plate.",
    url: "https://charterfarms.co.uk",
    siteName: "CHARTER",
    images: [
      {
        url: "/og-charter.png",
        width: 1200,
        height: 630,
        alt: "CHARTER — Better Farmers. Better Land. Better Beef."
      }
    ],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "CHARTER | The New Standard For Regenerative Meat",
    description: "Celebrating the fifth quarter and the cuts that deserve to be on our plate.",
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
        <TrafficTracker />
      </body>
    </html>
  );
}
