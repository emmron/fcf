import type { Metadata } from "next";
import Image from "next/image";

import { BeforeAfterSlider } from "@/components/before-after-slider";
import { Quote } from "@/components/icons";
import { CtaBand, SectionHeading, StatRow } from "@/components/site-ui";
import { VideoFacade } from "@/components/video-facade";
import { communityGallery, communityVideo, images } from "@/content/images";
import { googleReviewsUrl, site } from "@/content/site";
import {
  clientWins,
  proofStats,
  resultsDisclaimer,
  stories,
  testimonials,
} from "@/content/stories";
import { pageMetadata } from "@/lib/metadata";

export const ensureStatic = "navigation";

export const metadata: Metadata = pageMetadata({
  title: "Results and client stories",
  description:
    "Real FC Fitness client results: 60kg+ fat loss, three inches of glute growth, strength PRs and pain relief — shared with each client’s permission, plus reviews from Google.",
  path: "/results",
});

export default function ResultsPage() {
  return (
    <>
      <section className="container-page py-14 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-deep">Results</p>
          <h1 className="mt-5 font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-[0.98] tracking-[-0.03em] text-ink">
            Real people.
            <br />
            <span className="italic text-brand-deep">Real change.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">
            Every story below belongs to a real client and is shared with their permission. Some results are measured
            in kilograms, some in centimetres, and some in things that don’t show up on a scale at all.
          </p>
        </div>

        <div className="mt-10 border-t border-line pt-8">
          <StatRow stats={proofStats} />
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="container-page grid gap-16 lg:gap-24">
          {stories.map((story, index) => (
            <article
              key={story.slug}
              className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="rounded-card bg-paper-2 p-3 sm:p-4">
                <BeforeAfterSlider
                  before={images[story.before].src}
                  after={images[story.after].src}
                  beforeAlt={images[story.before].alt}
                  afterAlt={images[story.after].alt}
                  label={`${story.name}: ${story.headline}`}
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-deep">
                  Client story {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl">
                  {story.name}
                </h2>
                <p className="mt-2 font-display text-2xl leading-snug text-brand-deep">{story.headline}</p>
                <p className="mt-5 leading-relaxed text-ink-2">{story.summary}</p>
                <ul className="mt-5 grid gap-3">
                  {story.details.map((detail) => (
                    <li key={detail} className="flex gap-3 text-sm leading-relaxed text-ink-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 inline-flex rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper">
                  {story.result}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="container-page mt-14">
          <p className="max-w-3xl text-xs leading-relaxed text-ink-2">{resultsDisclaimer}</p>
        </div>
      </section>

      <section className="bg-paper-2/60 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Word of mouth"
            title="In their own words"
            intro="Reviews from clients on Google."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.quote}
                className="flex flex-col rounded-card border border-line bg-surface p-6"
              >
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
          <p className="mt-6 text-sm text-ink-2">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener"
              className="font-semibold text-brand-deep underline decoration-brand/40 underline-offset-4 hover:decoration-brand-deep"
            >
              Read and leave reviews on Google
            </a>
            .
          </p>
        </div>
      </section>

      <section id="community" className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
            <SectionHeading
              eyebrow="The community"
              title="More than a gym"
              intro="Every year, the FC Fitness community gets together for a professional photoshoot. Different bodies, different goals, one very supportive room."
            />
            <VideoFacade
              src={communityVideo.src}
              poster={communityVideo.poster.src}
              posterAlt={communityVideo.poster.alt}
              title={communityVideo.title}
              durationLabel="30 sec"
              className="rounded-card"
              sizes="(min-width: 1024px) 56vw, 100vw"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {communityGallery.map((key) => {
              const image = images[key];
              return (
                <div key={key} className="relative aspect-square overflow-hidden rounded-xl bg-paper-2">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 50vw"
                    placeholder="blur"
                    className="object-cover transition-transform duration-500 hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 rounded-card border border-line bg-surface p-6 sm:grid-cols-3">
            {clientWins.map((win) => (
              <div key={win.label}>
                <p className="font-display text-3xl leading-none text-ink">{win.value}</p>
                <p className="mt-1.5 text-sm text-ink-2">{win.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-12">
        <div className="container-page flex flex-col gap-3 text-sm text-ink-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.address.street}, {site.address.suburb} WA {site.address.postcode}
          </p>
          <p>
            Results vary from person to person. Consistency with training, nutrition and rest is what makes the
            difference.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
