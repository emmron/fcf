import type { ImageKey } from "./images";

export type Testimonial = {
  quote: string;
  name: string;
  source: string;
  href?: string;
};

/** Client reviews from the old site (Google reviews), quoted with attribution. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Fion is absolutely phenomenal. She's attentive, passionate and supportive, and has a wealth of knowledge in strength training and diet. She helped me surpass my objectives and take my training to another level.",
    name: "Mabelle Koh",
    source: "Google review",
  },
  {
    quote:
      "After 6 weeks of training with Fion, my chronic neck pain is gone as my back muscles are getting stronger with Fion's personalised workout plans.",
    name: "S.Y. Lo",
    source: "Google review",
  },
  {
    quote:
      "I've been training with Fion for a few months and I'm getting good results in building muscle and strength, even though I have a lower spinal issue.",
    name: "Google reviewer",
    source: "Google review",
    href: "https://www.google.com/maps/contrib/108822231711883923514",
  },
];

export type Story = {
  slug: string;
  name: string;
  headline: string;
  result: string;
  summary: string;
  details: string[];
  before: ImageKey;
  after: ImageKey;
  orientation: "portrait" | "landscape";
};

export const stories: Story[] = [
  {
    slug: "sheryce",
    name: "Sheryce",
    headline: "60kg lost, one session at a time",
    result: "60kg+ fat loss",
    summary:
      "Sheryce started training with Fion in the Melbourne studio before COVID and didn't stop: through lockdowns they trained in the park in sun, wind, cold and storms.",
    details: [
      "More than 60 kilograms lost, with no weight-loss surgery (only later surgery to remove excess skin).",
      "Built on consistent strength training, better food and a very strong mindset.",
      "Plenty of slips along the way, and she got back up every time.",
    ],
    before: "sheryceBefore",
    after: "sheryceAfter",
    orientation: "portrait",
  },
  {
    slug: "christine",
    name: "Christine",
    headline: "A new shape without chasing the scale",
    result: "+3 inches glute gain",
    summary:
      "Not every goal is weight loss. Over two years together, Christine's weight changed by only a few kilos, but her body composition, confidence and smile changed completely.",
    details: [
      "Three inches of glute growth through body recomposition.",
      "A mix of heavy strength work and hypertrophy training: drop sets, tempo work, mind-muscle connection and training to failure.",
      "She has since competed in powerlifting. (And no, lifting didn't make her bulky.)",
    ],
    before: "christineBefore",
    after: "christineAfter",
    orientation: "landscape",
  },
];

/** Shown beside before/after photos and client results. */
export const resultsDisclaimer =
  "Shared with each client's permission. Results vary from person to person and depend on consistent training, nutrition and rest.";

/** Headline numbers used in proof rows. */
export const proofStats = [
  { value: "100+", label: "clients coached since 2019" },
  { value: "60kg", label: "lost by one client" },
  { value: "350kg+", label: "Fion's powerlifting total" },
  { value: "3", label: "languages spoken" },
];

export const clientWins = [
  { value: "+90kg", label: "deadlift" },
  { value: "+50kg", label: "squat" },
  { value: "+2kg", label: "lean muscle in a year" },
  { value: "+3 in", label: "glute growth" },
];
