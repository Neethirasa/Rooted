// src/app/components/JsonLd.tsx
// Injects full structured data suite for Google Rich Results

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rooted Canada",
    url: "https://www.rootedcanada.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.rootedcanada.com/images/logo2.png",
      width: 260,
      height: 260,
    },
    description:
      "Rooted Canada crafts eco-friendly seed paper cards, sustainable stationery, and artisan paper goods that grow into wildflowers when planted.",
    email: "support@rootedcanada.com",
    sameAs: ["https://www.instagram.com/rooted_canada"],
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
    foundingLocation: {
      "@type": "Place",
      addressCountry: "CA",
    },
  };

  // Issue 4: LocalBusiness schema for Canadian local authority signal
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rooted Canada",
    url: "https://www.rootedcanada.com",
    image: "https://www.rootedcanada.com/images/og-image.jpg",
    description:
      "Rooted Canada sells eco-friendly seed paper cards and sustainable stationery shipped across Canada. Our artisan paper goods bloom into wildflowers when planted.",
    email: "support@rootedcanada.com",
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Credit Card",
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "AdministrativeArea", name: "Ontario" },
      { "@type": "AdministrativeArea", name: "British Columbia" },
      { "@type": "AdministrativeArea", name: "Quebec" },
      { "@type": "AdministrativeArea", name: "Alberta" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Seed Paper Cards & Eco-Friendly Stationery",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Seed Paper Wedding Cards",
            description:
              "Plantable seed paper wedding invitations that bloom into wildflowers. Eco-friendly, handcrafted, Canada-wide shipping.",
            url: "https://www.rootedcanada.com/category/wedding-cards",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Seed Paper Birthday Cards Canada",
            description:
              "Eco-friendly seed paper birthday cards shipped across Canada. Each card grows into wildflowers when planted.",
            url: "https://www.rootedcanada.com/category/birthday",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Eco-Friendly Holiday Cards",
            description:
              "Sustainable seed paper holiday cards and seasonal greeting cards from Rooted Canada.",
            url: "https://www.rootedcanada.com/category/holiday-cards",
          },
        },
      ],
    },
    sameAs: ["https://www.instagram.com/rooted_canada"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rooted Canada",
    url: "https://www.rootedcanada.com",
    description:
      "Shop plantable seed paper cards, eco-friendly stationery, and artisan paper goods from Rooted Canada — shipped across Canada.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.rootedcanada.com/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Issue 10: BreadcrumbList for homepage
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.rootedcanada.com",
      },
    ],
  };

  // Issue 5: ItemList / CollectionPage for homepage product collection
  const productCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Eco-Friendly Seed Paper Cards & Stationery — Rooted Canada",
    description:
      "Browse our full collection of plantable seed paper cards, eco-friendly stationery, and artisan paper goods for weddings, birthdays, holidays, and more. Shipped across Canada.",
    url: "https://www.rootedcanada.com",
    numberOfItems: 7,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://www.rootedcanada.com/category/wedding-cards",
        name: "Seed Paper Wedding Cards & Invitations",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://www.rootedcanada.com/category/holiday-cards",
        name: "Eco-Friendly Holiday Cards Canada",
      },
      {
        "@type": "ListItem",
        position: 3,
        url: "https://www.rootedcanada.com/category/birthday",
        name: "Plantable Seed Paper Birthday Cards",
      },
      {
        "@type": "ListItem",
        position: 4,
        url: "https://www.rootedcanada.com/category/love",
        name: "Eco-Friendly Love & Anniversary Cards",
      },
      {
        "@type": "ListItem",
        position: 5,
        url: "https://www.rootedcanada.com/category/mothers-day",
        name: "Seed Paper Mother's Day Cards Canada",
      },
      {
        "@type": "ListItem",
        position: 6,
        url: "https://www.rootedcanada.com/category/greeting-cards",
        name: "Handmade Greeting Cards Canada",
      },
      {
        "@type": "ListItem",
        position: 7,
        url: "https://www.rootedcanada.com/category/photo-cards",
        name: "Eco-Friendly Photo Cards Canada",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productCollectionSchema),
        }}
      />
    </>
  );
}
