import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import JsonLd from "./components/JsonLd";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  // ─── Core Meta ─────────────────────────────────────────────────────────────
  metadataBase: new URL("https://www.rootedcanada.com"),
  title: {
    default: "Rooted Canada | Eco-Friendly Seed Paper Cards & Stationery",
    template: "%s | Rooted Canada",
  },
  description:
    "Shop plantable seed paper cards & eco-friendly stationery from Rooted Canada. Wedding, birthday & holiday cards that bloom into wildflowers when planted.",
  keywords: [
    "seed paper cards canada",
    "plantable greeting cards",
    "eco friendly stationery canada",
    "sustainable wedding invitations canada",
    "wildflower seed paper",
    "rooted canada",
    "handmade cards canada",
    "eco wedding stationery",
  ],

  // ─── Canonical & Robots ────────────────────────────────────────────────────
  alternates: {
    canonical: "https://www.rootedcanada.com",
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

  // ─── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.rootedcanada.com",
    siteName: "Rooted Canada",
    title: "Rooted Canada | Eco-Friendly Seed Paper Cards & Stationery",
    description:
      "Shop plantable seed paper cards & eco-friendly stationery from Rooted Canada. Cards that bloom into wildflowers when planted.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rooted Canada — Eco-Friendly Seed Paper Cards that Bloom into Wildflowers",
      },
    ],
  },

  // ─── Twitter / X Card ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@rootedcanada",
    creator: "@rootedcanada",
    title: "Rooted Canada | Eco-Friendly Seed Paper Cards & Stationery",
    description:
      "Shop plantable seed paper cards & eco-friendly stationery. Cards that bloom into wildflowers when planted.",
    images: ["/images/og-image.jpg"],
  },

  // ─── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-to-main-content">
          Skip to main content
        </a>
        {children}
        <JsonLd />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}