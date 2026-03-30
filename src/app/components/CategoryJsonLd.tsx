// src/app/components/CategoryJsonLd.tsx
// Reusable JSON-LD injector for category pages.
// Outputs a BreadcrumbList so Google shows "Home > Category" in SERPs.

type Props = {
  categoryName: string;
  categoryUrl: string;
};

export default function CategoryJsonLd({ categoryName, categoryUrl }: Props) {
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
      {
        "@type": "ListItem",
        position: 2,
        name: categoryName,
        item: categoryUrl,
      },
    ],
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${categoryName} — Rooted Canada`,
    description: `Browse Rooted Canada's ${categoryName.toLowerCase()} — eco-friendly plantable seed paper cards shipped across Canada.`,
    url: categoryUrl,
    breadcrumb: breadcrumbSchema,
    isPartOf: {
      "@type": "WebSite",
      name: "Rooted Canada",
      url: "https://www.rootedcanada.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
    </>
  );
}
