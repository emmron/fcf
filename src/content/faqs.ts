export type Faq = {
  id: string;
  question: string;
  /** Paragraphs of the answer. */
  answer: string[];
  /** Optional link shown after the answer. */
  link?: { label: string; href: string };
};

export type FaqGroup = { id: string; title: string; faqs: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting started",
    faqs: [
      {
        id: "never-lifted",
        question: "I've never done weight training. Does that matter?",
        answer: [
          "Not at all. Everyone starts somewhere. I'll teach you how to move well, one exercise at a time, and build your confidence from your very first session.",
          "I coach every level, from complete beginners to competitive lifters.",
        ],
      },
      {
        id: "intro-session",
        question: "What happens in the introductory session?",
        answer: [
          "It's a relaxed 45 minutes for $20. We'll talk about your goals, lifestyle and any injuries, you'll try a session at your level and see the studio, and you'll leave with a recommended plan. There's no pressure to sign up.",
        ],
        link: { label: "Book your $20 introductory session", href: "/services/introductory-session" },
      },
      {
        id: "how-hard",
        question: "How hard will the sessions be?",
        answer: [
          "As hard as is right for you. I can make any exercise easier or harder on the spot, so you're always challenged but never out of your depth.",
          "I'll also explain why we're doing each exercise and correct your form and posture as we go, so you understand your training as well as doing it.",
        ],
      },
      {
        id: "results-timeline",
        question: "How long before I see results?",
        answer: [
          "If you train consistently and look after your nutrition and rest, most people see changes in around six weeks.",
          "My job is to show you how to reach your goals efficiently and safely. Yours is to do the homework between sessions: training, eating well and resting.",
        ],
      },
      {
        id: "why-pt",
        question: "Why work with a trainer instead of following workouts online?",
        answer: [
          "Everyone's body is different: flexibility, mobility, posture, bone structure, injury history and goals. An exercise that looks simple on a phone screen is easy to get wrong.",
          "A structured, progressive program with someone checking your form gets you results faster and keeps you safe, especially as a beginner.",
        ],
      },
      {
        id: "plateau",
        question: "I've trained for years but stopped seeing results. Can you help?",
        answer: [
          "Yes. Plateaus usually come from not tracking progress, technique issues, or inconsistent nutrition and attendance. I'll find what's holding you back and give you an individual plan built on progressive overload, so you can keep losing fat, building muscle and getting stronger.",
        ],
      },
    ],
  },
  {
    id: "sessions-pricing",
    title: "Sessions and pricing",
    faqs: [
      {
        id: "cost",
        question: "How much does personal training cost?",
        answer: [
          "Single sessions start at $60 for 30 minutes, and packs bring the per-session price down. There are also options for partners and small groups, so you can split the cost.",
          "The best way to start is the $20 introductory session, so you can try it before deciding.",
        ],
        link: { label: "See all pricing", href: "/pricing" },
      },
      {
        id: "session-length",
        question: "How long is a session?",
        answer: ["Most sessions are 45 minutes. 30-minute and 60-minute sessions are also available."],
      },
      {
        id: "hours",
        question: "What are your hours?",
        answer: [
          "Weekdays 6am–7pm and Saturdays 7am–1pm. Early before work, at lunchtime or before school pick-up, we'll find a time that fits your week.",
        ],
      },
      {
        id: "membership",
        question: "Do I need a gym membership or a contract?",
        answer: [
          "No membership and no lock-in contract. You train in my private studio and pay per session or per pack.",
          "If you'd also like to train on your own, I can write you a program for home, using bodyweight or minimal equipment, or for whichever gym you use, such as Revo, World Gym, Snap, Plus Fitness, Club Lime, Anytime Fitness, Goodlife or a university gym.",
        ],
      },
      {
        id: "cancellation",
        question: "What's your cancellation policy?",
        answer: ["Give at least 24 hours' notice and you won't be charged."],
      },
      {
        id: "partners",
        question: "Can I train with a partner, friend or family member?",
        answer: [
          "Yes. I run 2-on-1 sessions and small groups of three, so you can split the cost. Everyone still gets their own program and nutrition advice.",
        ],
        link: { label: "Train-together pricing", href: "/pricing#together" },
      },
    ],
  },
  {
    id: "studio",
    title: "The studio",
    faqs: [
      {
        id: "location",
        question: "Where are you located?",
        answer: [
          "My private studio is at 55 Galileo Avenue, Tapping WA 6065, in Perth's northern suburbs. It's air-conditioned in summer and heated in winter, and there's an outdoor park option five minutes away.",
        ],
        link: { label: "Get directions", href: "/contact#visit" },
      },
      {
        id: "kids",
        question: "Can I bring my kids?",
        answer: [
          "Yes, for free. Babies, toddlers, children and teenagers can stay in the same room while you train. Keep an eye on them, or turn it into a family workout. No crowded crèche, and no childcare bill.",
        ],
      },
      {
        id: "whats-it-like",
        question: "What's a session at FC Fitness like?",
        answer: [
          "Private. It's just you (or you and one other person) and me, so you can learn new movements without anyone watching. We work on what matters to you: your goals, form, range of motion, safety and nutrition. This isn't a bootcamp or a one-size-fits-all class.",
          "The studio is fully equipped with commercial-grade machines, so you never wait for equipment.",
        ],
      },
      {
        id: "coach-style",
        question: "What's Fion like as a coach?",
        answer: [
          "I love what I do. I try to be a teacher, an adviser, a supporter, a friend and a mentor to every client, and I like sessions to be fun too.",
          "I put myself in your shoes and never judge. I'll push you the right amount to get the best results.",
        ],
        link: { label: "More about Fion", href: "/about" },
      },
    ],
  },
  {
    id: "online-languages",
    title: "Online coaching and languages",
    faqs: [
      {
        id: "online",
        question: "Do you offer online coaching?",
        answer: [
          "Yes. I recommend starting in person at the studio so we can build your technique and confidence first. After that, online coaching keeps you progressing anywhere, with a tailored training plan, nutrition guidance and video feedback on your form.",
          "Online coaching is $20 a week (minimum three months, by direct debit), and you can add face-to-face sessions any time.",
        ],
        link: { label: "Online coaching pricing", href: "/pricing#flexible" },
      },
      {
        id: "languages",
        question: "Do you speak Cantonese or Mandarin?",
        answer: [
          "Yes! I'm originally from Hong Kong, and I coach in English, Cantonese and Mandarin.",
        ],
      },
      {
        id: "areas",
        question: "Which areas do your clients come from?",
        answer: [
          "Clients come from across Perth's northern suburbs, including Tapping, Carramar, Banksia Grove, Ashby, Sinagra, Wanneroo, Joondalup, Burns Beach and nearby. Online coaching clients train from anywhere.",
        ],
      },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((g) => g.faqs);

/** A short, original Chinese welcome for Cantonese and Mandarin speakers (Traditional Chinese). */
export const chineseWelcome = {
  lang: "zh-HK",
  heading: "我哋講廣東話、普通話",
  body: "你好！我係 Fion，來自香港嘅私人健身教練。喺 Tapping 嘅私人健身室，冇人群、唔使等機，我會按你嘅目標度身訂造訓練計劃：減脂、增肌、產前產後、姿勢矯正都得。歡迎致電或短訊 0406 171 448 查詢。",
};
