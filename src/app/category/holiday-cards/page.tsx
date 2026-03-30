import type { Metadata } from "next";
import HolidayCardsClient from "./HolidayCardsClient";

export const metadata: Metadata = {
  title: "Eco-Friendly Holiday Cards Canada",
  description:
    "Send eco-friendly seed paper holiday cards from Rooted Canada. Seasonal plantable greetings that bloom into wildflowers — handcrafted & shipped across Canada.",
  alternates: {
    canonical: "https://www.rootedcanada.com/category/holiday-cards",
  },
  openGraph: {
    title: "Eco-Friendly Holiday Cards Canada | Rooted Canada",
    description:
      "Plantable seed paper holiday cards that bloom into wildflowers. Eco-friendly seasonal greetings shipped across Canada.",
    url: "https://www.rootedcanada.com/category/holiday-cards",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function HolidayCardsPage() {
  return <HolidayCardsClient />;
}