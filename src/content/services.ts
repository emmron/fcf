import type { ImageKey } from "./images";

export type Service = {
  slug: string;
  /** Slug on the old Wix site (used for redirects and the Wix booking calendar). */
  legacySlug: string;
  name: string;
  /** One-line promise, used on cards and as the page subtitle. */
  tagline: string;
  /** Two or three sentences for the top of the service page. */
  intro: string;
  whoFor: string[];
  included: string[];
  /** Why train with Fion for this goal. */
  why: string;
  proof?: { value: string; label: string }[];
  note?: string;
  durationMinutes: number;
  price: number;
  depositNote?: string;
  image: ImageKey;
  featured?: boolean;
};

/**
 * The bookable sessions from the old site's booking page, in its original order.
 * Prices are the per-session booking prices from the live site (see pricing.ts for packs).
 */
export const services: Service[] = [
  {
    slug: "introductory-session",
    legacySlug: "20-introductory-session",
    name: "Introductory Session",
    tagline: "Your first step: a relaxed 45 minutes to talk goals and try a session.",
    intro:
      "Not sure where to start? This is where. We'll talk about your goals, your routine and anything that's held you back, then try a session at your level so you know exactly what training with me feels like. No pressure to sign up.",
    whoFor: [
      "Anyone thinking about personal training for the first time",
      "Returning to exercise after a long break, a baby or an injury",
      "Lifters who want a fresh set of eyes on their training",
    ],
    included: [
      "A chat about your goals, lifestyle, training history and injuries",
      "A taste of a real session, scaled to you",
      "A tour of the private Tapping studio",
      "A recommended plan and clear next steps",
      "Time for every question you have",
    ],
    why:
      "I lost 30kg myself and went on to win Best Female Lifter at a 2022 powerlifting competition, so I know how big the first step feels. The studio is private, air-conditioned and fully equipped. No crowds, no memberships and no judgement, and your kids are welcome too.",
    proof: [
      { value: "$20", label: "for 45 minutes, usually valued at $75" },
      { value: "100+", label: "clients coached since 2019" },
    ],
    durationMinutes: 45,
    price: 20,
    image: "tappingStudio",
    featured: true,
  },
  {
    slug: "fat-loss",
    legacySlug: "fat-loss",
    name: "Fat Loss",
    tagline: "Lose fat for good, without crash diets or punishing workouts.",
    intro:
      "Sustainable fat loss comes from training you enjoy and food you can live with. We'll build a plan around your goals and your week, then keep it moving with regular check-ins and plenty of encouragement.",
    whoFor: [
      "Beginners who want a clear plan and someone in their corner",
      "Anyone tired of yo-yo dieting",
      "People who feel self-conscious in a busy gym",
    ],
    included: [
      "A training plan built around your goals and schedule",
      "Practical nutrition guidance that doesn't leave you hungry",
      "Energetic sessions you'll actually look forward to",
      "Regular check-ins and progress tracking, with high-fives",
    ],
    why:
      "One of my clients lost more than 60kg, which is a whole person. It came from consistent strength training, better food and a strong mindset, and we'll use the same approach for you in a private, judgement-free space.",
    proof: [
      { value: "60kg+", label: "lost by client Sheryce" },
      { value: "~6 weeks", label: "until most clients see change" },
    ],
    durationMinutes: 45,
    price: 75,
    image: "activewearStanding",
  },
  {
    slug: "muscle-gain-strength",
    legacySlug: "muscle-gain-strength-training",
    name: "Muscle Gain & Strength",
    tagline: "Build muscle, lift heavier and move with confidence.",
    intro:
      "Whether it's your first time under a barbell or you're chasing a new PB, you'll get a strength program built for you, with coaching on every rep so you progress safely.",
    whoFor: [
      "First-time lifters who want to learn properly",
      "Anyone wanting to build muscle or change their shape",
      "Experienced lifters chasing strength PBs",
    ],
    included: [
      "Strength sessions programmed for your body and goals",
      "Safe, progressive technique coaching",
      "Flexible scheduling that fits your week",
      "A relaxed, friendly vibe (and a few bad jokes)",
    ],
    why:
      "I'm a competitive powerlifter with a 350kg+ total and Best Female Lifter at the 2022 JPS Spring Showdown, but my clients' wins are even better: three inches of glute growth, 2kg of lean muscle in a year, +90kg on the deadlift and +50kg on the squat.",
    proof: [
      { value: "+90kg", label: "client deadlift improvement" },
      { value: "+3 in", label: "client glute growth" },
      { value: "+2kg", label: "lean muscle in a year" },
    ],
    durationMinutes: 45,
    price: 75,
    depositNote: "Online bookings take a $20 deposit.",
    image: "fionDeadlift",
  },
  {
    slug: "pre-and-postnatal",
    legacySlug: "pre-post-pregnancy-workout",
    name: "Pre & Postnatal Training",
    tagline: "Safe, supportive training for every stage of parenthood.",
    intro:
      "Preparing for a baby or rebuilding strength afterwards, you'll train safely at a pace that respects what your body is doing. Bring the kids if you need to. We'll make it work.",
    whoFor: [
      "Women preparing their bodies for pregnancy",
      "New mums rebuilding strength after birth",
      "Busy parents who need flexibility, and an hour for themselves",
    ],
    included: [
      "Safe, low-impact training for before and after pregnancy",
      "Pelvic floor and deep core strengthening",
      "Session times that work around family life",
      "A family-friendly studio where children train free alongside you",
    ],
    why:
      "Parenting is hard enough. My studio is private, calm and set up for families, so your children can stay in the room with you, with no childcare costs and no crowded crèche.",
    note: "Please check with your GP, obstetrician or midwife before starting exercise during or after pregnancy.",
    durationMinutes: 45,
    price: 75,
    image: "activewearLaughing",
  },
  {
    slug: "youth-and-teen-training",
    legacySlug: "youth-athlete-and-teenger-training",
    name: "Youth Athlete & Teen Training",
    tagline: "Strength, skill and confidence for young athletes and teens.",
    intro:
      "A fun, pressure-free space where young people build coordination, strength and healthy habits, and leave every session a little prouder than they arrived.",
    whoFor: [
      "Young athletes who want an edge in their sport",
      "Teens starting strength training for the first time",
      "Kids who'd thrive away from a crowded gym floor",
    ],
    included: [
      "Skill-building sessions for coordination and athletic development",
      "Age-appropriate strength and conditioning",
      "A judgement-free space with no comparisons",
      "Healthy habits that last beyond the studio",
    ],
    why:
      "Every win counts here, big or small. Sessions are encouraging and well coached, and focused on helping your child discover their strength inside and out.",
    durationMinutes: 45,
    price: 75,
    image: "activewearBench",
  },
  {
    slug: "senior-wellness",
    legacySlug: "senoir-wellness",
    name: "Senior Wellness",
    tagline: "Stay strong, steady and independent at every age.",
    intro:
      "Strength, balance and mobility at your pace. Keep up with the grandkids, stay steady on your feet and keep doing the things you love.",
    whoFor: [
      "Seniors and retirees who want to stay independent",
      "Anyone wanting better balance and easier movement",
      "Retired couples who'd like to train together",
    ],
    included: [
      "Gentle, effective strength and balance training",
      "Mobility work for everyday independence",
      "Partner sessions for couples",
      "A quiet, private studio with no loud music or crowds",
    ],
    why:
      "There's no rush and no pressure here, just patient, expert coaching tailored to you, in a space where you'll feel safe and comfortable.",
    durationMinutes: 45,
    price: 75,
    image: "tappingStudio",
  },
  {
    slug: "posture-and-injury-prevention",
    legacySlug: "posture-correction-and-injury-prevention",
    name: "Posture Correction & Injury Prevention",
    tagline: "Move better, ease nagging aches and stay injury-free.",
    intro:
      "If poor posture, stiffness or a past injury is holding you back, we'll assess how you move and build a plan to help you feel strong and comfortable again.",
    whoFor: [
      "Desk workers with a stiff neck, shoulders or back",
      "Anyone returning to training after an injury",
      "Active people who want to stay injury-free in sport",
    ],
    included: [
      "A posture assessment and correction plan",
      "Mobility work to improve how you move",
      "Injury-prevention strategies for everyday life and sport",
      "Rehab-focused sessions tailored to your recovery",
    ],
    why:
      "Pain is frustrating, and progress can feel slow. I'm patient, I celebrate every step forward, and I'll explain why each exercise matters. One client's chronic neck pain was gone after six weeks of strengthening her back.",
    proof: [{ value: "6 weeks", label: "until a client's chronic neck pain eased" }],
    durationMinutes: 45,
    price: 75,
    image: "activewearKneeling",
  },
  {
    slug: "photoshoot-preparation",
    legacySlug: "content-or-photoshoot-preparation",
    name: "Photoshoot & Event Prep",
    tagline: "Feel strong, confident and camera-ready for your big moment.",
    intro:
      "Wedding, maternity shoot, personal branding or a milestone you want to remember? You'll get a focused program built around your date, so you arrive feeling incredible.",
    whoFor: [
      "Brides, grooms and wedding parties",
      "Maternity and milestone photoshoots",
      "Professional branding and content shoots",
    ],
    included: [
      "Short, high-impact programs built around your timeline",
      "Strength, conditioning and toning sessions",
      "Nutrition guidance to support your training",
      "Confidence coaching so you shine on camera",
    ],
    why:
      "Every year the FC Fitness community does a professional group photoshoot together, so I know what it takes to walk onto a set feeling proud of your body.",
    durationMinutes: 45,
    price: 75,
    image: "activewearBarbell",
  },
  {
    slug: "one-hour-session",
    legacySlug: "1-hour-detailed-personal-training",
    name: "1-Hour Detailed Session",
    tagline: "Extra time for detailed technique, programming and coaching.",
    intro:
      "A full hour for when you want more: longer sessions, detailed technique work, or training combined with nutrition and mindset coaching.",
    whoFor: [
      "Lifters refining technique on the big lifts",
      "Anyone who prefers a longer, more thorough session",
      "Clients making a big lifestyle change",
    ],
    included: [
      "60 minutes of one-on-one coaching",
      "Detailed technique correction",
      "Training, nutrition and mindset in one session",
      "An individual program to follow between sessions",
    ],
    why:
      "More time means more detail, so we can fine-tune your form, adjust your program and talk through nutrition without rushing.",
    durationMinutes: 60,
    price: 94,
    image: "tappingStudio",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/** The six goal-based programs shown in "Choose your training" (excludes intro and 1-hour). */
export const goalServices = services.filter(
  (s) => s.slug !== "introductory-session" && s.slug !== "one-hour-session",
);
