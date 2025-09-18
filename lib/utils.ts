// Função utilitária para combinar classes CSS
export function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return inputs.filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");

  if (cleaned.length === 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  }

  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
  }

  return phone;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

export function generateStructuredData(type: "Organization" | "WebSite" | "BreadcrumbList", data: any) {
  const baseUrl = "https://consulting-website.com";

  switch (type) {
    case "Organization":
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Consulting Company",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        description: "Empresa de consultoria especializada em soluções empresariais inovadoras.",
        address: {
          "@type": "PostalAddress",
          streetAddress: data.address?.street || "",
          addressLocality: data.address?.city || "",
          addressRegion: data.address?.state || "",
          postalCode: data.address?.zipCode || "",
          addressCountry: data.address?.country || "BR",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: data.contact?.phone || "",
          contactType: "customer service",
          availableLanguage: "Portuguese",
        },
        sameAs: data.social
          ? Object.keys(data.social)
              .map((key) => (data.social as Record<string, string>)[key])
              .filter(Boolean)
          : [],
      };

    case "WebSite":
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Consulting Company",
        url: baseUrl,
        potentialAction: {
          "@type": "SearchAction",
          target: `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      };

    case "BreadcrumbList":
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: data.map((item: any, index: number) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: `${baseUrl}${item.href}`,
        })),
      };

    default:
      return {};
  }
}
