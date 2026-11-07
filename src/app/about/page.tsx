import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Check } from "@/components/icons";
import { CtaBand, SectionHeading } from "@/components/site-ui";
import { about, studio } from "@/content/about";
import { images } from "@/content/images";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const ensureStatic = "navigation";

export const metadata: Metadata = pageMetadata({
  title: "About Fion Chan",
  description:
    "Meet Fion Chan: personal trainer, competitive powerlifter and founder of FC Fitness in Tapping, Perth. Certificate IV in Fitness, Best Female Lifter 2022 and coaching in English, Cantonese and Mandarin.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="container-page py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-paper-2">
            <Image
              src={images.fionPortrait.src}
              alt={images.fionPortrait.alt}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
            <p className="absolute right-4 bottom-4 left-4 rounded-2xl bg-paper/95 px-4 py-3 text-sm text-ink backdrop-blur">
              <span className="font-semibold">Fion Chan</span> · founder, coach and powerlifter
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-deep">About</p>
            <h1 className="mt-5 font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-[0.98] tracking-[-0.03em] text-ink">
              Meet Fion Chan
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">{about.intro}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { value: "10+ years", label: "training and competing" },
                { value: "100+", label: "clients coached" },
                { value: "3", label: "languages spoken" },
              ].map((stat) => (
                <div key={stat.label} className="border-t border-line pt-4">
                  <p className="font-display text-3xl leading-none">{stat.value}</p>
                  <p className="mt-1.5 text-xs leading-snug text-ink-2">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {about.credentials.slice(0, 3).map((credential) => (
                <span
                  key={credential.title}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink-2"
                >
                  {credential.title}
                </span>
              ))}
              <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink-2">
                {site.languages.join(" · ")}
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#enquire" className="btn btn-primary">
                Train with Fion
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/results" className="btn btn-secondary">
                See client results
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading eyebrow="The story" title="From Hong Kong to Tapping" />
          <div className="grid gap-5 text-base leading-relaxed text-ink-2 sm:text-lg">
            {about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-night py-16 text-night-ink sm:py-20">
        <div className="container-page">
          <SectionHeading
            onDark
            eyebrow="Milestones"
            title="The road so far"
            intro="A few moments that shaped the way Fion coaches today."
          />
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {about.timeline.map((entry) => (
              <li key={entry.year} className="border-t border-white/15 pt-5">
                <p className="font-display text-4xl leading-none text-brand">{entry.year}</p>
                <h3 className="mt-3 font-semibold text-night-ink">{entry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-night-ink/60">{entry.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="How Fion coaches"
            title="Personal, patient and in your corner"
            intro="The same four ideas sit behind every program in the studio."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {about.approach.map((item, index) => (
              <article key={item.title} className="rounded-card border border-line bg-surface p-6">
                <p className="font-display text-sm font-semibold text-brand-deep">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Credentials"
            title="Qualified, tested and still learning"
            intro="Coaching is a craft. These are the qualifications and results behind the sessions."
          />
          <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {about.credentials.map((credential) => (
              <div key={credential.title} className="flex gap-3 border-t border-line pt-4">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-deep" />
                <div>
                  <p className="font-semibold text-ink">{credential.title}</p>
                  <p className="mt-1 text-sm text-ink-2">{credential.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading eyebrow="The studio" title={studio.title} intro={studio.intro} />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {studio.features.map((feature) => (
                <li key={feature.title}>
                  <h3 className="font-semibold text-ink">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-2">{feature.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-display text-2xl italic text-brand-deep">
              {studio.taglines.join(" ")}
            </p>
          </div>

          <div className="grid gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-paper-2">
              <Image
                src={images.tappingStudio.src}
                alt={images.tappingStudio.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-card bg-paper-2">
              <Image
                src={images.melbourneGym.src}
                alt={images.melbourneGym.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
              <p className="absolute inset-x-3 bottom-3 rounded-xl bg-paper/95 px-4 py-2 text-xs leading-relaxed text-ink backdrop-blur">
                {studio.melbourne}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
