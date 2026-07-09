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
        url: "/assets/charter-home/updated-pics-v2/OpenGraph Link Preview Image.png",
        width: 1920,
        height: 1080,
        alt: "CHARTER regenerative meat OpenGraph preview"
      }
    ],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "CHARTER | The New Standard For Regenerative Meat",
    description: "Celebrating the fifth quarter and the cuts that deserve to be on our plate.",
    images: ["/assets/charter-home/updated-pics-v2/OpenGraph Link Preview Image.png"]
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
