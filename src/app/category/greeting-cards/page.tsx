import type { Metadata } from "next";
import GreetingCardsClient from "./GreetingCardsClient";
import CategoryJsonLd from "../../components/CategoryJsonLd";

export const metadata: Metadata = {
  title: "Handmade Greeting Cards Canada",
  description:
    "Shop handmade eco-friendly greeting cards from Rooted Canada. Plantable seed paper stationery for every occasion — ships across Canada. Cards that bloom into wildflowers.",
  alternates: {
    canonical: "https://www.rootedcanada.com/category/greeting-cards",
  },
  openGraph: {
    title: "Handmade Greeting Cards Canada | Rooted Canada",
    description:
      "Eco-friendly handmade greeting cards — plantable seed paper stationery that blooms into wildflowers. Shipped across Canada.",
    url: "https://www.rootedcanada.com/category/greeting-cards",
    images: [{
      url: "/images/handmade-greeting-cards-canada.jpeg",
      width: 1200,
      height: 630,
      alt: "Handmade Greeting Cards Canada — Rooted Canada",
    }],
  },
};

export default function GreetingCardsPage() {
  return (
    <>
      <CategoryJsonLd
        categoryName="Handmade Greeting Cards Canada"
        categoryUrl="https://www.rootedcanada.com/category/greeting-cards"
      />
      <GreetingCardsClient />
    </>
  );
}
