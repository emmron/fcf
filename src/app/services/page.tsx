import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Check } from "@/components/icons";
import {
  CheckList,
  CtaBand,
  CtaLink,
  SectionHeading,
  ServiceCard,
} from "@/components/site-ui";
import { images } from "@/content/images";
import { formatPrice } from "@/content/pricing";
import { goalServices, services } from "@/content/services";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const ensureStatic = "navigation";

export const metadata: Metadata = pageMetadata({
  title: "Personal training services",
  description:
    "Private personal training in Tapping, Perth: fat loss, muscle and strength, pre and postnatal, teen athletes, senior wellness, posture and injury prevention, photoshoot prep and online coaching.",
  path: "/services",
});

const introService = services[0];
const oneHour = services.find((service) => service.slug === "one-hour-session")!;
const introImage = images[introService.image];

export default function ServicesPage() {
  return (
    <>
      <section className="container-page py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-deep">Training</p>
            <h1 className="mt-5 font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-[0.98] tracking-[-0.03em] text-ink">
              A plan for where you are now — and where you want to be.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
              Every session is one-on-one in a private, fully equipped studio in Tapping. No crowded gym floor, no
              waiting for equipment, no one watching. Just coaching built around your body, your goals and your week.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#enquire" className="btn btn-primary">
                Ask Fion a question
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/pricing" className="btn btn-secondary">
                See pricing
              </Link>
            </div>
            <ul className="mt-8 grid gap-2 text-sm text-ink-2 sm:grid-cols-2">
              {[
                "45-minute sessions, usually one-on-one",
                "Beginners welcome — no experience needed",
                "No membership or lock-in contract",
                "Kids stay in the studio, free",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-deep" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-paper-2">
            <Image
              src={images.tappingStudio.src}
              alt={images.tappingStudio.alt}
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
            <p className="absolute bottom-4 left-4 rounded-full bg-paper/95 px-4 py-2 text-xs font-semibold text-ink backdrop-blur">
              The private studio · {site.address.street}, {site.address.suburb}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="container-page">
          <article className="grid overflow-hidden rounded-card border border-ink bg-surface lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <Image
                src={introImage.src}
                alt={introImage.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
            <div className="p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep">
                Not sure where to start?
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                The $20 introductory session
              </h2>
              <p className="mt-4 leading-relaxed text-ink-2">{introService.intro}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {introService.proof?.map((proof) => (
                  <div key={proof.label}>
                    <p className="font-display text-3xl leading-none text-ink">{proof.value}</p>
                    <p className="mt-1 text-xs text-ink-2">{proof.label}</p>
                  </div>
                ))}
              </div>
              <CtaLink
                href={`/services/${introService.slug}`}
                className="btn btn-primary mt-7"
              >
                About the intro session
                <ArrowRight className="size-4" />
              </CtaLink>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Goal-based programs"
            title="Choose what you’re training for"
            intro="Each program is a starting point, not a box. We’ll adapt the training as your goals and body change."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:[&>*:last-child]:col-start-2">
            {goalServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-night py-16 text-night-ink sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Need more time?</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.03] tracking-tight sm:text-5xl">
              The 1-hour detailed session
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-night-ink/70">{oneHour.intro}</p>
            <div className="mt-7">
              <CheckList items={oneHour.included.slice(0, 3)} onDark />
            </div>
          </div>
          <div className="rounded-card border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-night-ink/50">
              {oneHour.durationMinutes} minutes · one-on-one
            </p>
            <p className="mt-2 font-display text-5xl leading-none">{formatPrice(oneHour.price)}</p>
            <CtaLink
              href={`/services/${oneHour.slug}`}
              className="btn btn-light mt-6 w-full"
            >
              Session details
              <ArrowRight className="size-4" />
            </CtaLink>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
