// src/app/components/JsonLd.tsx
// Injects full structured data suite for Google Rich Results

export default function JsonLd() {
  // ─── Shared offer template (all cards are $2.50 CAD, shipped across Canada) ───
  const makeOffer = (categoryUrl: string) => ({
    "@type": "Offer",
    price: "2.50",
    priceCurrency: "CAD",
    availability: "https://schema.org/InStock",
    url: categoryUrl,
    seller: {
      "@type": "Organization",
      name: "Rooted Canada",
    },
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "CA",
      },
    },
  });

  // ─── Organization ────────────────────────────────────────────────────────────
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

  // ─── LocalBusiness ───────────────────────────────────────────────────────────
  // Each Product inside hasOfferCatalog must include an "offers" field
  // to satisfy Google's Product schema requirements (GSC critical issue fix)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.rootedcanada.com/#business",
    name: "Rooted Canada",
    url: "https://www.rootedcanada.com",
    image: "https://www.rootedcanada.com/images/og-image.jpg",
    description:
      "Rooted Canada sells eco-friendly seed paper cards and sustainable stationery shipped across Canada. Our artisan paper goods bloom into wildflowers when planted.",
    email: "support@rootedcanada.com",
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Credit Card",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CA",
    },
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
            // ✅ Required: offers field to resolve GSC critical error
            offers: makeOffer("https://www.rootedcanada.com/category/wedding-cards"),
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
            // ✅ Required: offers field to resolve GSC critical error
            offers: makeOffer("https://www.rootedcanada.com/category/birthday"),
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
            // ✅ Required: offers field to resolve GSC critical error
            offers: makeOffer("https://www.rootedcanada.com/category/holiday-cards"),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Eco-Friendly Love & Anniversary Cards",
            description:
              "Plantable seed paper love and anniversary cards that bloom into wildflowers. Shipped across Canada.",
            url: "https://www.rootedcanada.com/category/love",
            offers: makeOffer("https://www.rootedcanada.com/category/love"),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Seed Paper Mother's Day Cards",
            description:
              "Eco-friendly seed paper Mother's Day cards handcrafted and shipped across Canada.",
            url: "https://www.rootedcanada.com/category/mothers-day",
            offers: makeOffer("https://www.rootedcanada.com/category/mothers-day"),
          },
        },
      ],
    },
    sameAs: ["https://www.instagram.com/rooted_canada"],
  };

  // ─── WebSite ─────────────────────────────────────────────────────────────────
  // SearchAction REMOVED — no search functionality exists on this site.
  // A broken SearchAction causes GSC warnings and misleads crawlers.
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rooted Canada",
    url: "https://www.rootedcanada.com",
    description:
      "Shop plantable seed paper cards, eco-friendly stationery, and artisan paper goods from Rooted Canada — shipped across Canada. Cards that grow.",
  };

  // ─── BreadcrumbList (Homepage) ───────────────────────────────────────────────
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

  // ─── ItemList — Category collection for SERP site-links ─────────────────────
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

  // ─── FAQ Schema — captures informational rich results ───────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do you plant seed paper cards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tear or cut your Rooted Canada seed paper card into small pieces, place them in moist potting soil, cover lightly with 1/8 inch of soil, water gently, and set in a sunny spot. Wildflowers should sprout within 1–2 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Do you ship seed paper cards across all of Canada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Rooted Canada ships eco-friendly seed paper cards to all Canadian provinces and territories.",
        },
      },
      {
        "@type": "Question",
        name: "What wildflowers grow from Rooted Canada seed paper?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rooted Canada seed paper contains a mix of Canadian wildflower seeds suited to Canadian growing zones. Simply plant, water, and watch them bloom.",
        },
      },
      {
        "@type": "Question",
        name: "Are Rooted Canada cards truly eco-friendly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Each card is handcrafted using seed-embedded paper that is 100% plantable and biodegradable. When planted, the paper decomposes and the seeds grow into wildflowers — leaving zero waste.",
        },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
