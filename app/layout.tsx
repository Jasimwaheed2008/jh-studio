import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CFG } from "@/lib/config";

const desc = "JH Studio builds websites, Android apps, Shopify stores, Power BI dashboards, Excel and Word files, graphics and ads for small businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(CFG.siteUrl),
  title: `${CFG.name} – Websites, Apps, Shopify, Design & Ads`,
  description: desc,
  openGraph: { title: `${CFG.name} – Websites, Apps, Shopify, Design & Ads`, description: desc, type: "website", url: CFG.siteUrl },
  twitter: { card: "summary_large_image", title: CFG.name, description: desc },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#F6F8FC" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: CFG.name,
  description: desc,
  url: CFG.siteUrl,
  areaServed: "PK",
  sameAs: [CFG.instagram, CFG.facebook],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
