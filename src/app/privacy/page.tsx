import type { Metadata } from "next";

import { Eyebrow } from "@/components/site-ui";
import { privacy } from "@/content/privacy";
import { pageMetadata } from "@/lib/metadata";

export const ensureStatic = "navigation";

export const metadata: Metadata = pageMetadata({
  title: "Privacy policy",
  description:
    "How FC Fitness collects, uses and protects personal information from website enquiries and in-person training, in line with the Australian Privacy Principles.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="container-page py-14 sm:py-20">
      <div className="max-w-3xl">
        <Eyebrow>Privacy</Eyebrow>
        <h1 className="mt-5 font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1] tracking-[-0.03em] text-ink">
          Privacy policy
        </h1>
        <p className="mt-4 text-sm text-ink-2">Last updated: {privacy.updated}</p>
        <p className="mt-6 text-lg leading-relaxed text-ink-2">{privacy.intro}</p>

        <div className="mt-12 grid gap-10">
          {privacy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-2xl leading-tight tracking-tight sm:text-3xl">{section.title}</h2>
              <div className="mt-3 grid gap-3 leading-relaxed text-ink-2">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
