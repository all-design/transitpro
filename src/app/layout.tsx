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

export const metadata: Metadata = {
  title: "Transit Pro — Austrian Transit Plates",
  description: "Fast, reliable, and professional Austrian transit plates with WA insurance. Drive legally from point A to point B through Austria.",
  keywords: ["transit plates", "Austrian transit", "Transit Pro", "WA insurance", "export plates", "Österreich Transitkennzeichen"],
  authors: [{ name: "Transit Pro" }],
  icons: {
    icon: "/logoTPs.png",
  },
  openGraph: {
    title: "Transit Pro — Austrian Transit Plates",
    description: "Fast, reliable, and professional Austrian transit plates with WA insurance.",
    type: "website",
    siteName: "Transit Pro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
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
