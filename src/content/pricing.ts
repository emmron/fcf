/**
 * Plans from the old site's "Plans & Pricing" page. All prices are AUD and include GST where applicable.
 * NOTE for the owner: the live site lists a 45-minute session at $75 on the booking page but $80 here,
 * a 60-minute session at $94 vs $108, and the extra-person add-on at $20 vs "$15" in its description.
 * Confirm the correct numbers and update them in one place: this file and services.ts.
 */

export type Plan = {
  id: string;
  name: string;
  price: number;
  /** e.g. "per week". Omitted for one-off purchases. */
  per?: string;
  sessions?: number;
  minutes?: number;
  summary: string;
  includes: string[];
  badge?: string;
  /** Fine print shown under the plan. */
  terms?: string;
  /**
   * Minimum total cost for recurring plans. Show it as prominently as the recurring price
   * (ACCC component-pricing guidance).
   */
  minimumTotal?: { amount: number; label: string };
};

export type PlanGroup = {
  id: string;
  title: string;
  description: string;
  plans: Plan[];
};

const packIncludes = [
  "Body recomposition tracking and measurements",
  "Nutrition and diet advice",
  "A tailored workout plan for the gym or at home",
  "Your own training app",
];

export const planGroups: PlanGroup[] = [
  {
    id: "start",
    title: "Start here",
    description: "Try a session, meet Fion and see the studio before you commit to anything.",
    plans: [
      {
        id: "intro",
        name: "Introductory Session",
        price: 20,
        minutes: 45,
        sessions: 1,
        summary: "A full 45-minute session, usually valued at $75, to kick off your training.",
        includes: [
          "Goal-setting chat and a session at your level",
          "Private, air-conditioned studio",
          "No obligation to continue",
        ],
        badge: "Best first step",
        terms: "Valid for one month from purchase.",
      },
    ],
  },
  {
    id: "single",
    title: "Single sessions",
    description: "One-on-one coaching, pay as you go.",
    plans: [
      {
        id: "single-30",
        name: "30-minute session",
        price: 60,
        minutes: 30,
        sessions: 1,
        summary: "Short, efficient sessions for busy schedules.",
        includes: [
          "Workouts for all levels",
          "Individual program and technique correction",
          "Evidence-based nutrition advice",
        ],
      },
      {
        id: "single-45",
        name: "45-minute session",
        price: 80,
        minutes: 45,
        sessions: 1,
        summary: "The most popular option: focused coaching that maximises your results.",
        includes: [
          "Workouts for all levels",
          "Individual program and technique correction",
          "Evidence-based nutrition advice",
        ],
        badge: "Most popular",
      },
      {
        id: "single-60",
        name: "60-minute session",
        price: 108,
        minutes: 60,
        sessions: 1,
        summary: "Training, nutrition and mindset coaching in one longer session.",
        includes: [
          "Workouts for all levels",
          "Individual program and technique correction",
          "Evidence-based nutrition advice",
        ],
      },
    ],
  },
  {
    id: "packs",
    title: "Session packs",
    description: "Commit to your goals and save. Every pack includes measurements, nutrition advice and your own training app.",
    plans: [
      {
        id: "pack-10x30",
        name: "10 × 30 minutes",
        price: 550,
        minutes: 30,
        sessions: 10,
        summary: "Ideal for mature, rehab and beginner clients who want shorter sessions.",
        includes: packIncludes,
      },
      {
        id: "pack-10x45",
        name: "10 × 45 minutes",
        price: 750,
        minutes: 45,
        sessions: 10,
        summary: "Our most popular pack for getting in shape with personalised guidance.",
        includes: packIncludes,
        badge: "Popular",
      },
      {
        id: "pack-10x60",
        name: "10 × 60 minutes",
        price: 1030,
        minutes: 60,
        sessions: 10,
        summary: "For experienced lifters and anyone making a significant lifestyle change.",
        includes: packIncludes,
      },
      {
        id: "pack-20x45",
        name: "20 × 45 minutes",
        price: 1460,
        minutes: 45,
        sessions: 20,
        summary: "A bigger commitment for a bigger transformation.",
        includes: packIncludes,
      },
      {
        id: "pack-40x45",
        name: "40 × 45 minutes",
        price: 2880,
        minutes: 45,
        sessions: 40,
        summary: "The best per-session value, for a long-term lifestyle change.",
        includes: packIncludes,
        badge: "Best value",
      },
    ],
  },
  {
    id: "together",
    title: "Train together",
    description: "Bring a partner, friend or family member and split the cost. Everyone still gets their own program.",
    plans: [
      {
        id: "duo-45",
        name: "2-on-1, 45 minutes",
        price: 100,
        minutes: 45,
        summary: "Personalised plans and nutrition guidance for two, with support between sessions.",
        includes: ["Individual workout plans", "Nutrition guidance", "Support between sessions"],
      },
      {
        id: "duo-60",
        name: "2-on-1, 60 minutes",
        price: 118,
        minutes: 60,
        summary: "A full hour for couples or friends, with individual plans and nutrition tracking.",
        includes: ["Individual custom workout plans", "Individual nutrition advice"],
      },
      {
        id: "trio",
        name: "Small group of 3",
        price: 128,
        summary: "A private small-group session for you and your family or friends.",
        includes: ["Individual programs", "Small-group personal training", "Split the cost three ways"],
      },
      {
        id: "add-on",
        name: "Extra person add-on",
        price: 20,
        per: "per session",
        summary: "Add another person to an existing session.",
        includes: ["Join any session", "Their own workout, coached alongside yours"],
      },
    ],
  },
  {
    id: "flexible",
    title: "Online and technique",
    description: "Keep progressing between studio sessions, or get expert eyes on your lifts.",
    plans: [
      {
        id: "online",
        name: "Online coaching",
        price: 20,
        per: "per week",
        summary: "A personalised six-week program with training, nutrition and support, so you can train anywhere.",
        includes: [
          "Personalised training program, renewed every six weeks",
          "Nutrition guidance",
          "Video feedback on your technique",
          "Add face-to-face sessions any time",
        ],
        minimumTotal: { amount: 260, label: "minimum total over 3 months (13 weeks)" },
        terms: "Minimum commitment of 3 months, paid weekly by direct debit.",
      },
      {
        id: "technique",
        name: "Technique correction",
        price: 150,
        minutes: 60,
        sessions: 1,
        summary: "A one-off hour for lifters who have their own program and want their form checked by an expert.",
        includes: ["Bring your own program or lifts", "Detailed form and technique feedback", "No ongoing commitment"],
      },
    ],
  },
];

export function perSession(plan: Plan): number | null {
  if (!plan.sessions || plan.sessions < 2) return null;
  return Math.round(plan.price / plan.sessions);
}

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }).format(n);

export const pricingPolicies = [
  { title: "No membership, no lock-in", body: "Pay per session or per pack. There's no joining fee and no contract." },
  { title: "24-hour cancellation", body: "Give 24 hours' notice to cancel or reschedule and you won't be charged." },
  { title: "Kids train free", body: "Children are welcome in the studio during your session, at no cost." },
];
