import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Transit Pro — Austrian Transit Plates",
  description: "Fast, reliable, and professional Austrian transit plates with WA insurance. Drive legally from point A to point B through Austria.",
  keywords: ["transit plates", "Austrian transit", "Transit Pro", "WA insurance", "export plates", "Österreich Transitkennzeichen"],
  authors: [{ name: "Transit Pro" }],
  icons: {
    icon: "/logo.svg",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
