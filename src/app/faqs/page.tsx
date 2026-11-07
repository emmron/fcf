import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Globe, MapPin, Plus } from "@/components/icons";
import { CtaBand, FaqList, SectionHeading } from "@/components/site-ui";
import { allFaqs, chineseWelcome, faqGroups } from "@/content/faqs";
import { allSuburbs, nearbySuburbs } from "@/content/suburbs";
import { site } from "@/content/site";
import { faqJsonLd, jsonLdScript } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";

export const ensureStatic = "navigation";

export const metadata: Metadata = pageMetadata({
  title: "FAQs",
  description:
    "Answers about training at FC Fitness in Tapping: what happens in the $20 introductory session, pricing, hours, cancellations, kids in the studio, online coaching and which Perth suburbs clients come from.",
  path: "/faqs",
});

export default function FaqsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(allFaqs))} />

      <section className="container-page py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-deep">FAQs</p>
            <h1 className="mt-5 font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-[0.98] tracking-[-0.03em] text-ink">
              Everything you might be wondering.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-2">
              Nervous about starting, not sure what a session looks like, or wondering whether you can bring the
              kids? Here are the questions Fion hears most.
            </p>
          </div>
          <nav aria-label="FAQ topics" className="flex flex-wrap gap-2 lg:justify-end">
            {faqGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="rounded-full border border-line bg-surface px-3.5 py-2 text-xs font-semibold text-ink-2 transition-colors hover:border-ink hover:text-ink"
              >
                {group.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {faqGroups.map((group, index) => (
        <section key={group.id} id={group.id} className="border-t border-line py-12 sm:py-14">
          <div className="container-page grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-deep">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-display text-3xl leading-tight tracking-tight sm:text-4xl">{group.title}</h2>
            </div>
            <FaqList faqs={group.faqs} idPrefix={group.id} />
          </div>
        </section>
      ))}

      <section className="border-t border-line py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Where clients come from"
            title="Perth’s northern suburbs — and beyond"
            intro="The studio is in Tapping, minutes from the Joondalup line and the Mitchell Freeway. Clients travel from all over Perth, and online clients train from anywhere."
          />
          <div>
            <ul className="flex flex-wrap gap-2">
              {nearbySuburbs.map((suburb) => (
                <li
                  key={suburb}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink-2"
                >
                  {suburb}
                </li>
              ))}
            </ul>

            <details className="group mt-6 rounded-card border border-line bg-surface p-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-ink">
                All suburbs we welcome
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line transition-transform group-open:rotate-45">
                  <Plus className="size-4" />
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-ink-2">{allSuburbs.join(" · ")}</p>
            </details>

            <p className="mt-5 flex items-start gap-2 text-sm text-ink-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-deep" />
              <span>
                {site.address.street}, {site.address.suburb} WA {site.address.postcode} ·{" "}
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener"
                  className="font-semibold text-brand-deep underline decoration-brand/40 underline-offset-4 hover:decoration-brand-deep"
                >
                  Get directions
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-16">
        <div className="container-page grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-deep">We speak your language</p>
            <h2 lang="zh-HK" className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              {chineseWelcome.heading}
            </h2>
            <p lang="zh-HK" className="mt-3 max-w-2xl leading-relaxed text-ink-2">
              {chineseWelcome.body}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={site.phone.href} className="btn btn-secondary">
              Call {site.phone.display}
            </a>
            <Link href="/contact#enquire" className="btn btn-primary">
              Send an enquiry
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-page flex flex-col items-start justify-between gap-6 rounded-card border border-line bg-surface p-7 sm:flex-row sm:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep">
              <Globe className="size-4" />
              Coaching in three languages
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-2">
              Fion coaches in {site.languages.join(", ")}. If English isn’t your first language, sessions can run in
              whichever language feels most comfortable.
            </p>
          </div>
          <Link href="/about" className="btn btn-secondary shrink-0">
            About Fion
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
