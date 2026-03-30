import type { Metadata } from "next";
import WeddingCardsClient from "./WeddingCardsClient";

export const metadata: Metadata = {
  title: "Seed Paper Wedding Cards & Invitations",
  description:
    "Beautiful plantable seed paper wedding invitations & cards from Rooted Canada. Eco-friendly, handcrafted, Canada-wide shipping. Cards that bloom into wildflowers.",
  alternates: {
    canonical: "https://www.rootedcanada.com/category/wedding-cards",
  },
  openGraph: {
    title: "Seed Paper Wedding Cards & Invitations | Rooted Canada",
    description:
      "Plantable wedding invitations that bloom into wildflowers. Eco-friendly, handcrafted, shipped across Canada.",
    url: "https://www.rootedcanada.com/category/wedding-cards",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function WeddingCardsPage() {
  return <WeddingCardsClient />;
}