/**
 * Business details used across the site (header, footer, contact page, structured data).
 * Change contact details here and they update everywhere.
 */

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fcpt.com.au").replace(/\/$/, "");

/**
 * Optional external booking system (e.g. a booking page on Wix, Cal.com, Fresha).
 * When unset, every "Book" button goes to the enquiry form on /contact instead.
 */
const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL?.replace(/\/$/, "") || null;

export const site = {
  name: "FC Fitness",
  fullName: "FC Fitness — Fion Chan Personal Training",
  shortName: "FC Fitness",
  owner: "Fion Chan",
  tagline: "Private personal training in Tapping, Perth",
  description:
    "Results-driven personal training with Fion Chan in a private, air-conditioned studio in Tapping, Perth. No memberships, no lock-in contracts, kids welcome. Book a $20 introductory session.",
  url: siteUrl,
  locale: "en_AU",
  foundingYear: 2019,

  phone: {
    display: "0406 171 448",
    href: "tel:+61406171448",
    sms: "sms:+61406171448",
    e164: "+61406171448",
  },
  email: "hello@fcpt.com.au",

  address: {
    street: "55 Galileo Avenue",
    suburb: "Tapping",
    state: "WA",
    postcode: "6065",
    country: "AU",
    region: "Perth's northern suburbs",
    geo: { lat: -31.7219152, lng: 115.7996547 },
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=FC%20Fitness%2C%2055%20Galileo%20Avenue%2C%20Tapping%20WA%206065",

  /** Opening hours, Australia/Perth time. */
  hours: [
    { days: "Monday – Friday", open: "6:00am", close: "7:00pm", schema: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "06:00", closes: "19:00" } },
    { days: "Saturday", open: "7:00am", close: "1:00pm", schema: { days: ["Saturday"], opens: "07:00", closes: "13:00" } },
    { days: "Sunday", open: null, close: null, schema: null },
  ],

  socials: {
    instagram: { label: "Instagram", handle: "@fion_lovelifee", href: "https://www.instagram.com/fion_lovelifee/" },
    facebook: { label: "Facebook", handle: "fionchanfitness", href: "https://www.facebook.com/fionchanfitness/" },
  },

  languages: ["English", "Cantonese", "Mandarin"],

  booking: {
    /** External booking base URL, or null to use the enquiry form. */
    url: bookingUrl,
    introPrice: 20,
    introDuration: 45,
  },
} as const;

export type Site = typeof site;

/** Where a "Book" button should go for a given service. */
export function bookingHref(serviceSlug?: string, externalSlug?: string): string {
  if (site.booking.url) {
    return externalSlug ? `${site.booking.url}/${externalSlug}` : site.booking.url;
  }
  return serviceSlug ? `/contact?service=${serviceSlug}#enquire` : "/contact#enquire";
}

/** True when booking links point to another website (open in a new tab). */
export const bookingIsExternal = Boolean(site.booking.url);

/**
 * The primary call to action. Its wording stays honest either way: it names the outcome,
 * and only says "Book" when it really opens a booking system (otherwise it opens the enquiry form).
 */
export const primaryCta = {
  label: bookingIsExternal ? "Book your $20 intro session" : "Start with a $20 intro session",
  shortLabel: bookingIsExternal ? "Book $20 intro" : "$20 intro session",
  href: bookingHref("introductory-session", "20-introductory-session"),
  external: bookingIsExternal,
};

/** Google Maps listing, where visitors can read and leave reviews. */
export const googleReviewsUrl =
  "https://www.google.com/maps/search/?api=1&query=FC%20Fitness%20-%20Results%20Driven%20Personal%20Training%20Perth%2C%20Galileo%20Avenue%2C%20Tapping%20WA";

export const nav = [
  { label: "About", href: "/about" },
  { label: "Training", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Results", href: "/results" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
] as const;
