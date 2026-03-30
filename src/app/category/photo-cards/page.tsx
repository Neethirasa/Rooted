import type { Metadata } from "next";
import PhotoCardsClient from "./PhotoCardsClient";
import CategoryJsonLd from "../../components/CategoryJsonLd";

export const metadata: Metadata = {
  title: "Eco-Friendly Photo Cards Canada",
  description:
    "Personalized eco-friendly photo cards from Rooted Canada. Plantable seed paper photo cards shipped across Canada — print your memories, grow wildflowers.",
  alternates: {
    canonical: "https://www.rootedcanada.com/category/photo-cards",
  },
  openGraph: {
    title: "Eco-Friendly Photo Cards Canada | Rooted Canada",
    description:
      "Plantable seed paper photo cards that double as wildflower gardens. Personalized, eco-friendly, shipped across Canada.",
    url: "https://www.rootedcanada.com/category/photo-cards",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function PhotoCardsPage() {
  return (
    <>
      <CategoryJsonLd
        categoryName="Eco-Friendly Photo Cards Canada"
        categoryUrl="https://www.rootedcanada.com/category/photo-cards"
      />
      <PhotoCardsClient />
    </>
  );
}