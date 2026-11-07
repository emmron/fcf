import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check } from "@/components/icons";
import { CtaBand, CtaLink, Eyebrow, SectionHeading } from "@/components/site-ui";
import {
  formatPrice,
  perSession,
  planGroups,
  pricingPolicies,
  type Plan,
} from "@/content/pricing";
import { primaryCta } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const ensureStatic = "navigation";

export const metadata: Metadata = pageMetadata({
  title: "Pricing",
  description:
    "Private personal training prices in Tapping, Perth: a $20 introductory session, single sessions from $60, session packs, partner and small-group training, and online coaching from $20 a week.",
  path: "/pricing",
});

function PlanCard({ plan }: { plan: Plan }) {
  const per = perSession(plan);
  const isIntro = plan.id === "intro";

  return (
    <article
      id={plan.id}
      className={`relative flex h-full flex-col rounded-card border p-6 ${
        plan.badge ? "border-ink bg-surface" : "border-line bg-surface/70"
      }`}
    >
      {plan.badge ? (
        <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-brand-ink">
          {plan.badge}
        </span>
      ) : null}

      <h3 className="font-display text-2xl leading-tight tracking-tight">{plan.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-2">{plan.summary}</p>

      <p className="mt-5 flex items-baseline gap-1.5">
        <span className="font-display text-4xl leading-none tracking-tight">{formatPrice(plan.price)}</span>
        {plan.per ? <span className="text-sm text-ink-2">{plan.per}</span> : null}
      </p>
      <p className="mt-1.5 text-xs font-medium uppercase tracking-wide text-ink-2">
        {plan.sessions && plan.sessions > 1
          ? `${plan.sessions} sessions · ${formatPrice(per ?? plan.price)} each`
          : plan.minutes
            ? `${plan.minutes} minutes`
            : "One-on-one coaching"}
      </p>

      {plan.minimumTotal ? (
        <p className="mt-2 text-xs leading-relaxed text-ink-2">
          Minimum total {formatPrice(plan.minimumTotal.amount)} {plan.minimumTotal.label}.
        </p>
      ) : null}

      <ul className="mt-5 grid gap-2.5 border-t border-line pt-5">
        {plan.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-ink-2">
            <Check className="mt-0.5 size-3.5 shrink-0 text-brand-deep" />
            {item}
          </li>
        ))}
      </ul>

      {plan.terms ? <p className="mt-4 text-xs leading-relaxed text-ink-2/80">{plan.terms}</p> : null}

      <div className="mt-auto pt-6">
        <CtaLink
          href={isIntro ? primaryCta.href : "/contact#enquire"}
          external={isIntro && primaryCta.external}
          className={`${isIntro ? "btn btn-primary" : "btn btn-secondary"} w-full`}
        >
          {isIntro ? primaryCta.label : "Enquire about this option"}
        </CtaLink>
      </div>
    </article>
  );
}

export default function PricingPage() {
  return (
    <>
      <section className="container-page py-14 sm:py-20">
        <div className="max-w-3xl">
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="mt-5 font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-[0.98] tracking-[-0.03em] text-ink">
            Clear prices. No surprises.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">
            Pay per session or per pack. There’s no joining fee, no membership and no lock-in contract — and the
            first step is always a $20 introductory session.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CtaLink
              href={primaryCta.href}
              external={primaryCta.external}
              className="btn btn-primary"
            >
              {primaryCta.label}
              <ArrowRight className="size-4" />
            </CtaLink>
            <Link href="/contact#enquire" className="btn btn-secondary">
              Ask a question
            </Link>
          </div>
          <p className="mt-5 text-sm text-ink-2">All prices are in Australian dollars.</p>
        </div>
      </section>

      {planGroups.map((group, index) => (
        <section key={group.id} id={group.id} className="border-t border-line py-14 sm:py-16">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-deep">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                  {group.title}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-2">{group.description}</p>
              </div>
            </div>

            <div
              className={
                group.plans.length === 1
                  ? "mx-auto mt-8 w-full max-w-md"
                  : "mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
              }
            >
              {group.plans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-line py-14 sm:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="The fine print"
            title="Simple terms, in plain English"
            intro="No tricks, no hidden extras. Here’s how training at FC Fitness works."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pricingPolicies.map((policy) => (
              <div key={policy.title} className="rounded-card border border-line bg-surface p-6">
                <h3 className="font-display text-2xl leading-tight">{policy.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{policy.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-2">
            Questions about what’s right for you?{" "}
            <Link
              href="/faqs#sessions-pricing"
              className="font-semibold text-brand-deep underline decoration-brand/40 underline-offset-4 hover:decoration-brand-deep"
            >
              Read the pricing FAQs
            </Link>{" "}
            or{" "}
            <Link
              href="/contact#enquire"
              className="font-semibold text-brand-deep underline decoration-brand/40 underline-offset-4 hover:decoration-brand-deep"
            >
              send Fion a message
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
