import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLeft, ArrowRight, Check, Clock, MapPin } from "@/components/icons";
import {
  CheckList,
  CtaBand,
  CtaLink,
  Eyebrow,
  ServiceCard,
} from "@/components/site-ui";
import { images } from "@/content/images";
import { formatPrice } from "@/content/pricing";
import { getService, goalServices, services } from "@/content/services";
import {
  bookingHref,
  bookingIsExternal,
  primaryCta,
  site,
} from "@/content/site";
import { breadcrumbJsonLd, jsonLdScript, serviceJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";

export const ensureStatic = "navigation";
export const instant = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);

  if (!service) return {};

  return pageMetadata({
    title: service.name,
    description: service.tagline,
    path: `/services/${service.slug}`,
    ogTitle: `${service.name} | ${site.name}`,
  });
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);

  if (!service) notFound();

  const image = images[service.image];
  const bookingUrl = bookingHref(service.slug, service.legacySlug);
  const isIntro = service.slug === "introductory-session";
  const ctaLabel = isIntro
    ? primaryCta.label
    : bookingIsExternal
      ? "Book this session"
      : "Enquire about this session";

  const related = goalServices.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Training", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(serviceJsonLd(service))} />

      <div className="container-page pt-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-ink-2">
            <li>
              <Link href="/" className="hover:text-ink">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/services" className="hover:text-ink">
                Training
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              {service.name}
            </li>
          </ol>
        </nav>
      </div>

      <section className="container-page grid gap-12 pt-8 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pt-10">
        <div>
          <Eyebrow>{isIntro ? "Start here" : "One-on-one personal training"}</Eyebrow>
          <h1 className="mt-4 font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-[0.98] tracking-[-0.03em] text-ink">
            {service.name}
          </h1>
          <p className="mt-4 max-w-xl font-display text-2xl leading-snug text-brand-deep">{service.tagline}</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">{service.intro}</p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-2">
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4 text-brand-deep" />
              {service.durationMinutes} minutes
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-brand-deep" />
              Private studio, {site.address.suburb}
            </span>
            <span className="font-semibold text-ink">{formatPrice(service.price)} per session</span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={bookingUrl} external={bookingIsExternal} className="btn btn-primary">
              {ctaLabel}
              <ArrowRight className="size-4" />
            </CtaLink>
            <Link href="/pricing" className="btn btn-secondary">
              See all pricing
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-paper-2">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div className="grid gap-12">
            <div>
              <h2 className="font-display text-3xl leading-tight tracking-tight">Who it’s for</h2>
              <ul className="mt-5 grid gap-3">
                {service.whoFor.map((item) => (
                  <li key={item} className="flex gap-3 text-ink-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-3xl leading-tight tracking-tight">What’s included</h2>
              <div className="mt-5">
                <CheckList items={service.included} />
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl leading-tight tracking-tight">Why train with Fion</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink-2">{service.why}</p>
            </div>

            {service.proof?.length ? (
              <div className="grid grid-cols-2 gap-4 rounded-card border border-line bg-surface p-6 sm:grid-cols-3">
                {service.proof.map((proof) => (
                  <div key={proof.label}>
                    <p className="font-display text-3xl leading-none text-ink">{proof.value}</p>
                    <p className="mt-1.5 text-xs leading-snug text-ink-2">{proof.label}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {service.note ? (
              <p className="rounded-control border border-brand/30 bg-brand/5 px-4 py-3 text-sm leading-relaxed text-ink-2">
                {service.note}
              </p>
            ) : null}
          </div>

          <aside className="h-fit rounded-card border border-line bg-surface p-6 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-2">
              {service.durationMinutes}-minute session
            </p>
            <p className="mt-2 font-display text-5xl leading-none tracking-tight">{formatPrice(service.price)}</p>
            {service.depositNote ? <p className="mt-2 text-xs text-ink-2">{service.depositNote}</p> : null}

            <CtaLink href={bookingUrl} external={bookingIsExternal} className="btn btn-primary mt-5 w-full">
              {ctaLabel}
            </CtaLink>
            <a href={site.phone.href} className="btn btn-secondary mt-2 w-full">
              Call {site.phone.display}
            </a>

            <ul className="mt-6 grid gap-2.5 border-t border-line pt-5 text-xs text-ink-2">
              {[
                "No membership or lock-in contract",
                "24 hours’ notice to reschedule",
                "Kids welcome in the studio, free",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-brand-deep" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-ink-2">
              <MapPin className="mr-1 inline size-4 text-brand-deep" />
              {site.address.street}, {site.address.suburb} WA {site.address.postcode}
            </p>
          </aside>
        </div>
      </section>

      {related.length ? (
        <section className="border-t border-line py-16 sm:py-20">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                Other ways to train
              </h2>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-brand/50 decoration-2 underline-offset-4 hover:text-brand-deep"
              >
                <ArrowLeft className="size-4" />
                All training
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ServiceCard key={item.slug} service={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand />
    </>
  );
}
