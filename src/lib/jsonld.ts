import { about } from "@/content/about";
import type { Faq } from "@/content/faqs";
import type { Service } from "@/content/services";
import { site } from "@/content/site";
import { testimonials } from "@/content/stories";

/** Serialise JSON-LD safely for a <script> tag (escapes "<" to prevent injection). */
export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

const businessId = `${site.url}/#business`;
const personId = `${site.url}/#fion`;

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["ExerciseGym", "HealthAndBeautyBusiness"],
    "@id": businessId,
    name: site.fullName,
    alternateName: ["FC Fitness", "Fion Chan Fitness", "FCPT"],
    description: site.description,
    url: site.url,
    telephone: site.phone.e164,
    email: site.email,
    image: `${site.url}/opengraph-image`,
    priceRange: "$20–$150",
    currenciesAccepted: "AUD",
    foundingDate: String(site.foundingYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.suburb,
      addressRegion: site.address.state,
      postalCode: site.address.postcode,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.address.geo.lat, longitude: site.address.geo.lng },
    hasMap: site.mapsUrl,
    areaServed: { "@type": "City", name: "Perth", containedInPlace: { "@type": "State", name: "Western Australia" } },
    openingHoursSpecification: site.hours
      .filter((h) => h.schema)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.schema!.days.map((d) => `https://schema.org/${d}`),
        opens: h.schema!.opens,
        closes: h.schema!.closes,
      })),
    knowsLanguage: ["en", "yue", "zh"],
    founder: { "@id": personId },
    employee: { "@id": personId },
    sameAs: [site.socials.instagram.href, site.socials.facebook.href],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Private studio", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Child friendly", value: true },
    ],
    review: testimonials
      .filter((t) => t.name !== "Google reviewer")
      .map((t) => ({
        "@type": "Review",
        reviewBody: t.quote,
        author: { "@type": "Person", name: t.name },
      })),
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: about.name,
    jobTitle: "Personal Trainer",
    worksFor: { "@id": businessId },
    knowsLanguage: ["English", "Cantonese", "Mandarin"],
    award: "Best Female Lifter, JPS Spring Showdown Melbourne 2022",
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", name: "Certificate IV in Fitness" },
      { "@type": "EducationalOccupationalCredential", name: "NBFA certification" },
    ],
    sameAs: [site.socials.instagram.href],
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.intro,
    serviceType: "Personal training",
    url: `${site.url}/services/${service.slug}`,
    provider: { "@id": businessId },
    areaServed: "Perth, Western Australia",
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: "AUD",
      description: `${service.durationMinutes}-minute session`,
    },
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer.join(" ") },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
