// src/app/components/JsonLd.tsx
// Injects structured data for Google Rich Results
// Drop this into your RootLayout <body> after {children}

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rooted Canada",
    url: "https://www.rootedcanada.com",
    logo: "https://www.rootedcanada.com/images/logo2.png",
    description:
      "Rooted Canada crafts eco-friendly seed paper cards and sustainable stationery that grow into wildflowers when planted.",
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rooted Canada",
    url: "https://www.rootedcanada.com",
    description:
      "Shop plantable seed paper cards and eco-friendly stationery from Rooted Canada.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.rootedcanada.com/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const productCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Eco-Friendly Seed Paper Cards — Rooted Canada",
    description:
      "Browse our collection of plantable seed paper cards for weddings, birthdays, holidays, and more. Shipped across Canada.",
    url: "https://www.rootedcanada.com",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.rootedcanada.com",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
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
