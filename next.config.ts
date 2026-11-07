import type { NextConfig } from "next";

/** Old Wix booking-service slugs → new service page slugs. */
const legacyServiceSlugs: Record<string, string> = {
  "20-introductory-session": "introductory-session",
  "fat-loss": "fat-loss",
  "muscle-gain-strength-training": "muscle-gain-strength",
  "pre-post-pregnancy-workout": "pre-and-postnatal",
  "youth-athlete-and-teenger-training": "youth-and-teen-training",
  "senoir-wellness": "senior-wellness",
  "posture-correction-and-injury-prevention": "posture-and-injury-prevention",
  "content-or-photoshoot-preparation": "photoshoot-preparation",
  "1-hour-detailed-personal-training": "one-hour-session",
};

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/video/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  async redirects() {
    return [
      // Old Wix pages
      { source: "/book-online", destination: "/services", permanent: true },
      { source: "/pricing-plans/:path*", destination: "/pricing", permanent: true },
      { source: "/s-projects-side-by-side", destination: "/results", permanent: true },
      { source: "/paywall", destination: "/", permanent: true },
      { source: "/faq", destination: "/faqs", permanent: true },
      { source: "/success-stories", destination: "/results", permanent: true },
      { source: "/book", destination: "/contact", permanent: false },
      // Old Wix service and booking-calendar pages
      ...Object.entries(legacyServiceSlugs).flatMap(([oldSlug, newSlug]) => [
        { source: `/service-page/${oldSlug}`, destination: `/services/${newSlug}`, permanent: true },
        { source: `/booking-calendar/${oldSlug}`, destination: `/services/${newSlug}`, permanent: true },
      ]),
      { source: "/service-page/:path*", destination: "/services", permanent: true },
      { source: "/booking-calendar/:path*", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
