import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BeforeAfterSlider } from "@/components/before-after-slider";
import { ArrowRight, Check, MapPin, Quote } from "@/components/icons";
import {
  CtaBand,
  CtaLink,
  Eyebrow,
  FaqList,
  SectionHeading,
  ServiceCard,
  StatRow,
} from "@/components/site-ui";
import { VideoFacade } from "@/components/video-facade";
import { studio } from "@/content/about";
import { chineseWelcome, faqGroups } from "@/content/faqs";
import { communityGallery, communityVideo, images } from "@/content/images";
import { formatPrice } from "@/content/pricing";
import { goalServices } from "@/content/services";
import {
  googleReviewsUrl,
  primaryCta,
  site,
} from "@/content/site";
import {
  clientWins,
  proofStats,
  resultsDisclaimer,
  stories,
  testimonials,
} from "@/content/stories";
import { pageMetadata } from "@/lib/metadata";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  ...pageMetadata({
    title: site.tagline,
    description: site.description,
    path: "/",
    ogTitle: `${site.name} — ${site.tagline}`,
  }),
  title: { absolute: `${site.name} — ${site.tagline}` },
};

const sheryce = stories[0];

const valueStrip = [
  "Completely private studio",
  "No membership or lock-in",
  "Kids train free",
  "English · Cantonese · Mandarin",
];

const pricingTeasers = [
  {
    name: "Introductory session",
    price: 20,
    suffix: "",
    detail: "45 minutes, usually $75",
    body: "Meet Fion, try a session at your level and see the studio. No pressure to continue.",
    href: "/services/introductory-session",
    cta: "Start here",
    featured: true,
  },
  {
    name: "10 × 45 minutes",
    price: 750,
    suffix: "",
    detail: `${formatPrice(750 / 10)} per session`,
    body: "The most popular pack: personalised training, nutrition guidance and your own training app.",
    href: "/pricing#packs",
    cta: "See the pack",
    featured: false,
  },
  {
    name: "Online coaching",
    price: 20,
    suffix: "/week",
    detail: "Minimum 3 months, paid weekly",
    body: "A tailored six-week program with video feedback, so you can keep progressing anywhere.",
    href: "/pricing#flexible",
    cta: "How it works",
    featured: false,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-page grid gap-12 pt-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pt-20 lg:pb-24">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-deep">
              <span aria-hidden="true" className="size-2 rounded-full bg-brand" />
              Private personal training · Tapping, Perth
            </p>

            <h1 className="mt-6 font-display text-[clamp(3.25rem,8vw,5.75rem)] leading-[0.95] tracking-[-0.03em] text-ink">
              Stronger,
              <br />
              <span className="italic text-brand-deep">on your terms.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">{site.description}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={primaryCta.href} external={primaryCta.external} className="btn btn-primary">
                {primaryCta.label}
                <ArrowRight className="size-4" />
              </CtaLink>
              <Link href="/services" className="btn btn-secondary">
                Explore training
              </Link>
            </div>

            <p className="mt-5 text-sm text-ink-2">
              <Check className="mr-1 inline size-4 text-brand-deep" />
              No memberships. No lock-in. Kids train free.
            </p>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
              {proofStats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-xs leading-snug text-ink-2">{stat.label}</dt>
                  <dd className="font-display text-3xl leading-none tracking-tight text-ink">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-paper-2">
              <Image
                src={images.fionPortrait.src}
                alt={images.fionPortrait.alt}
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-night/75 via-night/20 to-transparent"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-paper/95 p-4 backdrop-blur sm:inset-x-5 sm:bottom-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep">
                  Best Female Lifter · 2022
                </p>
                <p className="mt-1 text-sm leading-snug text-ink-2">
                  JPS Spring Showdown, Melbourne · 350kg+ powerlifting total
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -right-2 rotate-3 rounded-2xl bg-brand px-4 py-3 text-brand-ink shadow-lg sm:-right-4">
              <p className="font-display text-3xl leading-none">$20</p>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em]">intro session</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Studio highlights" className="border-y border-line bg-paper-2/60">
        <div className="container-page grid grid-cols-2 gap-x-6 gap-y-3 py-5 text-sm sm:grid-cols-4">
          {valueStrip.map((item) => (
            <p key={item} className="flex items-center gap-2 text-ink-2">
              <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-brand" />
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Choose your training"
              title={
                <>
                  Every goal gets
                  <br />
                  its own plan.
                </>
              }
              intro="Fat loss, strength, pre and postnatal, teens, seniors or getting back into movement — the training is built around you and your week."
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-brand/50 decoration-2 underline-offset-4 transition-colors hover:text-brand-deep"
            >
              All training
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {goalServices.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20 sm:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-paper-2">
            <Image
              src={images.tappingStudio.src}
              alt={images.tappingStudio.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
            <p className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-paper/95 px-4 py-2 text-xs font-semibold text-ink backdrop-blur">
              <MapPin className="size-4 text-brand-deep" />
              {site.address.street}, {site.address.suburb}
            </p>
          </div>

          <div>
            <SectionHeading eyebrow="The studio" title={studio.title} intro={studio.intro} />

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {studio.features.slice(0, 4).map((feature) => (
                <div key={feature.title}>
                  <h3 className="font-semibold text-ink">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-2">{feature.body}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-brand/50 decoration-2 underline-offset-4 transition-colors hover:text-brand-deep"
            >
              More about Fion and the studio
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-night py-20 text-night-ink sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              onDark
              eyebrow="Real results"
              title={
                <>
                  Change you can see,
                  <br />
                  and keep.
                </>
              }
              intro="Every result here belongs to a real client, shared with their permission. No crash diets, no shortcuts, no magic — just consistent training, food you can live with and a coach in your corner."
            />
            <div className="mt-10">
              <StatRow stats={clientWins} onDark />
            </div>
            <p className="mt-8 max-w-xl text-xs leading-relaxed text-night-ink/45">{resultsDisclaimer}</p>
            <Link href="/results" className="btn btn-light mt-6">
              See client stories
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="rounded-card bg-paper p-3 text-ink sm:p-4">
            <BeforeAfterSlider
              before={images.sheryceBefore.src}
              after={images.sheryceAfter.src}
              beforeAlt={images.sheryceBefore.alt}
              afterAlt={images.sheryceAfter.alt}
              label={`${sheryce.name}: ${sheryce.headline}`}
            />
            <div className="px-2 pt-3 pb-1">
              <p className="font-display text-2xl leading-tight">{sheryce.name}</p>
              <p className="text-sm text-ink-2">{sheryce.headline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Word of mouth"
            title="What clients say"
            intro="A few words from people who train at FC Fitness."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.quote} className="flex flex-col rounded-card border border-line bg-surface p-6">
                <Quote className="size-6 text-brand" />
                <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-ink">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto pt-5 text-sm text-ink-2">
                  <span className="font-semibold text-ink">{testimonial.name}</span> · {testimonial.source}
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-5 text-xs text-ink-2">
            Reviews quoted from Google.{" "}
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener"
              className="font-semibold text-brand-deep underline decoration-brand/40 underline-offset-4 hover:decoration-brand-deep"
            >
              Read more on Google
            </a>
            .
          </p>
        </div>
      </section>

      <section className="border-t border-line py-20 sm:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The community"
              title="You don’t have to train alone."
              intro="FC Fitness is a private studio, but it’s never a lonely one. Every year the community gets together for a professional photoshoot — a celebration of what everyone has built."
            />
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-2">
              Around the one-on-one sessions there are milestones, first pull-ups, competition days, beach shoots
              and plenty of laughs. Come for the training; stay for the people.
            </p>
            <Link
              href="/results#community"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-brand/50 decoration-2 underline-offset-4 transition-colors hover:text-brand-deep"
            >
              See the community
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div>
            <VideoFacade
              src={communityVideo.src}
              poster={communityVideo.poster.src}
              posterAlt={communityVideo.poster.alt}
              title={communityVideo.title}
              durationLabel="30 sec"
              className="rounded-card"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
            <div className="mt-3 grid grid-cols-4 gap-3">
              {communityGallery.slice(0, 4).map((key) => {
                const image = images[key];
                return (
                  <div key={key} className="relative aspect-square overflow-hidden rounded-xl bg-paper-2">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 13vw, 25vw"
                      placeholder="blur"
                      className="object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-2/50 py-20 sm:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Simple pricing"
              title="Pay as you go. No lock-in."
              intro="Single sessions, packs, partner sessions and online coaching. Every option is upfront — no joining fees and no contracts."
            />
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-brand/50 decoration-2 underline-offset-4 transition-colors hover:text-brand-deep"
            >
              Full pricing
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pricingTeasers.map((teaser) => (
              <article
                key={teaser.name}
                className={`flex flex-col rounded-card border p-6 ${
                  teaser.featured ? "border-ink bg-surface" : "border-line bg-surface/70"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-2xl leading-tight">{teaser.name}</h3>
                  {teaser.featured ? (
                    <span className="shrink-0 whitespace-nowrap rounded-full bg-brand px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-brand-ink">
                      Best first step
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-4xl leading-none tracking-tight">{formatPrice(teaser.price)}</span>
                  {teaser.suffix ? <span className="text-sm text-ink-2">{teaser.suffix}</span> : null}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-2">{teaser.detail}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-2">{teaser.body}</p>
                <Link
                  href={teaser.href}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-deep"
                >
                  {teaser.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="FAQs"
            title="Good to know"
            intro="Nervous about your first session, not sure what to bring, or wondering if you can bring the kids? Start here."
          />
          <div>
            <FaqList faqs={faqGroups[0].faqs.slice(0, 4)} idPrefix="home" />
            <Link
              href="/faqs"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-brand/50 decoration-2 underline-offset-4 transition-colors hover:text-brand-deep"
            >
              All your questions
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-16">
        <div className="container-page grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Eyebrow>We speak your language</Eyebrow>
            <h2 lang="zh-HK" className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              {chineseWelcome.heading}
            </h2>
            <p lang="zh-HK" className="mt-3 max-w-2xl leading-relaxed text-ink-2">
              {chineseWelcome.body}
            </p>
          </div>
          <a href={site.phone.href} className="btn btn-secondary w-fit">
            Call {site.phone.display}
          </a>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
