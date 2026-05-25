import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://transitpro.eu";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Transit Pro — Österreichische Transitkennzeichen | WA-Versicherung | EU-weit",
    template: "Transit Pro — %s",
  },
  description:
    "Österreichische Transitkennzeichen mit WA-Versicherung für Lkw, Busse und Anhänger. Legale Durchfahrt durch die EU und viele weitere Länder. Same-Day-Bearbeitung. Nur für Unternehmen.",
  keywords: [
    "Transitkennzeichen",
    "Österreichische Transitkennzeichen",
    "Transit Pro",
    "WA-Versicherung",
    "Ausfuhrkennzeichen",
    "Transit plates",
    "Austrian transit plates",
    "export plates",
    "transitna tablica",
    "austrijske tranzitne tablice",
    "numere de tranzit austriece",
    "транзитни табели",
    "plaques de transit autrichiennes",
    "targhe di transito austriache",
    "Österreich Transit",
    "Grüne Karte",
    "EU Transit",
    "Same-Day",
    "Lkw Transit",
    "Anhänger Transit",
    "Ausfuhrregistrierung",
    "EUCARIS",
    "EORI",
  ],
  authors: [{ name: "Transit Pro", url: siteUrl }],
  creator: "Transit Pro",
  publisher: "Transit Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "de": siteUrl,
      "sr": `${siteUrl}/?lang=sr`,
      "en": `${siteUrl}/?lang=en`,
      "ro": `${siteUrl}/?lang=ro`,
      "bg": `${siteUrl}/?lang=bg`,
      "fr": `${siteUrl}/?lang=fr`,
      "it": `${siteUrl}/?lang=it`,
      "x-default": siteUrl,
    },
  },
  icons: {
    icon: [
      { url: "/logoTPs.png", type: "image/png" },
    ],
    apple: "/logoTPs.png",
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    alternateLocale: ["sr_RS", "en_GB", "ro_RO", "bg_BG", "fr_FR", "it_IT"],
    url: siteUrl,
    siteName: "Transit Pro",
    title: "Transit Pro — Österreichische Transitkennzeichen mit WA-Versicherung",
    description:
      "Schnelle, zuverlässige und professionelle Abwicklung österreichischer Transitkennzeichen. Legale Durchfahrt durch die EU und viele weitere Länder. Same-Day-Bearbeitung ab 12:00 Uhr.",
    images: [
      {
        url: "/og-image.png",
        width: 1344,
        height: 768,
        alt: "Transit Pro — Österreichische Transitkennzeichen auf weißem Hintergrund",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transit Pro — Austrian Transit Plates with WA Insurance",
    description:
      "Fast, reliable Austrian transit plates. Drive legally through the EU and many more countries. Same-day processing.",
    images: ["/og-image.png"],
    creator: "@transitpro",
    site: "@transitpro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
  classification: "Automotive Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="apple-mobile-web-app-title" content="Transit Pro" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta property="business:contact_data:country_name" content="Austria" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${montserrat.variable} antialiased bg-background text-foreground`}
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
