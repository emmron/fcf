import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Check, Plus } from "@/components/icons";
import type { Faq } from "@/content/faqs";
import { images } from "@/content/images";
import { formatPrice } from "@/content/pricing";
import type { Service } from "@/content/services";
import { primaryCta, site } from "@/content/site";

export function Eyebrow({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.22em] ${
        onDark ? "text-brand" : "text-brand-deep"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  onDark = false,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 font-display text-4xl leading-[1.04] tracking-tight sm:text-5xl ${
          onDark ? "text-night-ink" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-5 text-lg leading-relaxed ${onDark ? "text-night-ink/70" : "text-ink-2"}`}>{intro}</p>
      ) : null}
    </div>
  );
}

export function CtaLink({
  href,
  external = false,
  className = "btn btn-primary",
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener" className={className}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  const image = images[service.image];

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-card border border-line bg-surface transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-28px_rgba(25,21,17,0.45)] motion-reduce:hover:translate-y-0"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-paper-2">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          placeholder="blur"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
        />
        {service.featured ? (
          <span className="absolute top-4 left-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-ink">
            Start here
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl leading-tight tracking-tight text-ink">{service.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-2">{service.tagline}</p>
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-line pt-5 text-sm">
          <span className="font-semibold text-ink">
            {formatPrice(service.price)}{" "}
            <span className="font-normal text-ink-2">/ {service.durationMinutes} min</span>
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-brand-deep">
            Details
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function FaqList({ faqs, idPrefix }: { faqs: Faq[]; idPrefix: string }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((faq) => (
        <details key={faq.id} id={`${idPrefix}-${faq.id}`} className="group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left">
            <span className="font-medium text-ink">{faq.question}</span>
            <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-ink transition-transform duration-200 group-open:rotate-45">
              <Plus className="size-4" />
            </span>
          </summary>
          <div className="max-w-3xl pb-6 text-sm leading-relaxed text-ink-2 sm:text-base">
            {faq.answer.map((paragraph) => (
              <p key={paragraph} className="mt-3 first:mt-0">
                {paragraph}
              </p>
            ))}
            {faq.link ? (
              <Link
                href={faq.link.href}
                className="mt-4 inline-flex items-center gap-1 font-semibold text-brand-deep underline decoration-brand/40 underline-offset-4 hover:decoration-brand-deep"
              >
                {faq.link.label}
                <ArrowRight className="size-4" />
              </Link>
            ) : null}
          </div>
        </details>
      ))}
    </div>
  );
}

export function StatRow({
  stats,
  onDark = false,
}: {
  stats: readonly { value: string; label: string }[];
  onDark?: boolean;
}) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse">
          <dt className={`mt-2 text-sm leading-snug ${onDark ? "text-night-ink/60" : "text-ink-2"}`}>
            {stat.label}
          </dt>
          <dd
            className={`font-display text-4xl leading-none tracking-tight ${
              onDark ? "text-night-ink" : "text-ink"
            }`}
          >
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function CheckList({ items, onDark = false }: { items: string[]; onDark?: boolean }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
              onDark ? "bg-brand text-brand-ink" : "bg-ink text-paper"
            }`}
          >
            <Check className="size-3" />
          </span>
          <span className={`text-sm leading-relaxed sm:text-base ${onDark ? "text-night-ink/80" : "text-ink-2"}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function CtaBand({
  title = "Your first session is $20.",
  body = "Forty-five minutes, usually valued at $75. We'll talk goals, try a session at your level and see if we're a good fit. No pressure, no lock-in.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-brand text-brand-ink">
      <div className="container-page grid gap-8 py-16 sm:py-20 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-ink/85">Ready when you are</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl">{title}</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-brand-ink/85">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <CtaLink
            href={primaryCta.href}
            external={primaryCta.external}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-paper transition-colors hover:bg-night"
          >
            {primaryCta.label}
          </CtaLink>
          <a
            href={site.phone.href}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-brand-ink/30 px-6 text-sm font-semibold text-brand-ink transition-colors hover:bg-brand-ink/10"
          >
            Call {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
