import type { Metadata } from "next";
import BirthdayClient from "./BirthdayClient";

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
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function BirthdayPage() {
  return <BirthdayClient />;
}
