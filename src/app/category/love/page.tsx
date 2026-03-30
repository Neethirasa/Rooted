import type { Metadata } from "next";
import LoveClient from "./LoveClient";

export const metadata: Metadata = {
  title: "Eco-Friendly Love & Anniversary Cards",
  description:
    "Share love with eco-friendly seed paper love & anniversary cards from Rooted Canada. Plantable cards that bloom into wildflowers — shipped across Canada.",
  alternates: {
    canonical: "https://www.rootedcanada.com/category/love",
  },
  openGraph: {
    title: "Eco-Friendly Love & Anniversary Cards | Rooted Canada",
    description:
      "Plantable seed paper love cards that bloom into wildflowers. Eco-friendly & handcrafted, shipped across Canada.",
    url: "https://www.rootedcanada.com/category/love",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function LovePage() {
  return <LoveClient />;
}
