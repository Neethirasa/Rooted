import type { Metadata } from "next";
import MothersDayClient from "./MothersDayClient";

export const metadata: Metadata = {
  title: "Seed Paper Mother's Day Cards Canada",
  description:
    "Celebrate Mom with eco-friendly seed paper Mother's Day cards from Rooted Canada. Plantable cards that bloom into wildflowers — handcrafted & shipped across Canada.",
  alternates: {
    canonical: "https://www.rootedcanada.com/category/mothers-day",
  },
  openGraph: {
    title: "Seed Paper Mother's Day Cards Canada | Rooted Canada",
    description:
      "Plantable seed paper Mother's Day cards that bloom into wildflowers. Eco-friendly & handcrafted, shipped across Canada.",
    url: "https://www.rootedcanada.com/category/mothers-day",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function MothersDayPage() {
  return <MothersDayClient />;
}

