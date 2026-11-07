import { site } from "./site";

/**
 * Plain-English privacy policy. It covers what this website actually does, but it isn't legal advice:
 * the owner should review it, especially how health information collected in person is stored.
 */
export const privacy = {
  updated: "7 November 2026",
  intro: `${site.fullName} ("FC Fitness", "we", "us") respects your privacy. This policy explains what personal information we collect, why, and how we look after it, in line with the Australian Privacy Principles in the Privacy Act 1988 (Cth).`,
  sections: [
    {
      title: "What we collect",
      body: [
        "When you send an enquiry through this website, we collect your name, email address and, if you provide them, your phone number, the service you're interested in, your preferred training times and your message.",
        "If you train with us, we may also ask about your health, injuries, medications and fitness history (for example in a pre-exercise screening questionnaire). This is health information, and we only collect it with your consent so that we can train you safely.",
      ],
    },
    {
      title: "How we use it",
      body: [
        "We use your information to reply to your enquiry, arrange and deliver training, design your program, process payments and keep you safe during exercise. We don't sell your information or use it for unrelated marketing.",
      ],
    },
    {
      title: "Who we share it with",
      body: [
        "Website enquiries are delivered to us by email through our email-delivery provider (Resend), and this website is hosted by Vercel. These providers may store data on servers outside Australia, including in the United States, and process it only to provide their services to us.",
        "We don't share your health information with anyone else unless you ask us to (for example, with your physiotherapist), or the law requires or permits it.",
      ],
    },
    {
      title: "Cookies and analytics",
      body: [
        "This website doesn't use advertising or tracking cookies. Our hosting provider may keep standard server logs, such as IP addresses and the pages requested, for security and performance.",
      ],
    },
    {
      title: "Keeping it secure",
      body: [
        "We take reasonable steps to protect your information from misuse, loss and unauthorised access, and we delete or de-identify it when we no longer need it.",
      ],
    },
    {
      title: "Accessing or correcting your information",
      body: [
        `You can ask to see or correct the personal information we hold about you at any time. Email ${site.email} or call ${site.phone.display}.`,
      ],
    },
    {
      title: "Questions and complaints",
      body: [
        `If you have a question or a concern about how we've handled your information, contact us at ${site.email} and we'll respond within 30 days. If you're not satisfied, you can contact the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.`,
      ],
    },
  ],
};
