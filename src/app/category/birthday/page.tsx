import type { Metadata } from "next";
import BirthdayClient from "./BirthdayClient";
import CategoryJsonLd from "../../components/CategoryJsonLd";

export const metadata: Metadata = {
  title: "Plantable Seed Paper Birthday Cards",
  description:
    "Celebrate with eco-friendly seed paper birthday cards from Rooted Canada. Plantable cards that grow into wildflowers — handcrafted & shipped across Canada.",
  alternates: {
    canonical: "https://www.rootedcanada.com/category/birthday",
  },
  openGraph: {
    title: "Plantable Seed Paper Birthday Cards | Rooted Canada",
    description:
      "Eco-friendly seed paper birthday cards that bloom into wildflowers. Handcrafted & shipped across Canada.",
    url: "https://www.rootedcanada.com/category/birthday",
    images: [{
      url: "/images/seed-paper-birthday-card-canada.png",
      width: 1200,
      height: 630,
      alt: "Plantable Seed Paper Birthday Cards — Rooted Canada",
    }],
  },
};

export default function BirthdayPage() {
  return (
    <>
      <CategoryJsonLd
        categoryName="Plantable Seed Paper Birthday Cards"
        categoryUrl="https://www.rootedcanada.com/category/birthday"
      />
      <BirthdayClient />
    </>
  );
}
