// src/app/components/ArticleJsonLd.tsx
// Injects BlogPosting (Article) JSON-LD schema for each blog post.
// Renders as a <script> tag in the document <head> via Next.js Server Components.

type Props = {
  title: string;
  description: string;
  url: string;
  datePublished: string; // ISO 8601: "2026-03-08"
  dateModified: string;
  imagePath?: string;
};

export default function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  imagePath = "https://www.rootedcanada.com/images/og-image.jpg",
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "Rooted Canada",
      url: "https://www.rootedcanada.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Rooted Canada",
      logo: {
        "@type": "ImageObject",
        url: "https://www.rootedcanada.com/images/logo2.png",
      },
    },
    image: {
      "@type": "ImageObject",
      url: imagePath,
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    isPartOf: {
      "@type": "Blog",
      name: "Rooted Canada Blog",
      url: "https://www.rootedcanada.com/blog",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
