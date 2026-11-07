import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { Clock, Instagram, Facebook, Mail, MapPin, Message, Phone } from "@/components/icons";
import { Eyebrow } from "@/components/site-ui";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const ensureStatic = "navigation";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Fion Chan at FC Fitness, 55 Galileo Avenue, Tapping WA 6065. Call or text 0406 171 448, email hello@fcpt.com.au, or send an enquiry about personal training.",
  path: "/contact",
});

const serviceOptions = services.map((service) => ({
  value: service.slug,
  label: `${service.name} (${service.durationMinutes} min)`,
}));

export default function ContactPage() {
  return (
    <>
      <section className="container-page py-14 sm:py-20">
        <div className="max-w-3xl">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-[0.98] tracking-[-0.03em] text-ink">
            Let’s find your starting point.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-2">
            Tell Fion a little about your goals, your week and anything that’s held you back. She usually replies
            within one business day — or you can call or text if you’d rather talk it through.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a href={site.phone.href} className="inline-flex items-center gap-2 font-semibold text-ink hover:text-brand-deep">
              <Phone className="size-4 text-brand-deep" />
              {site.phone.display}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 font-semibold text-ink hover:text-brand-deep"
            >
              <Mail className="size-4 text-brand-deep" />
              {site.email}
            </a>
            <span className="inline-flex items-center gap-2 text-ink-2">
              <MapPin className="size-4 text-brand-deep" />
              {site.address.street}, {site.address.suburb}
            </span>
          </div>
        </div>
      </section>

      <section id="enquire" className="border-t border-line py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
          <div className="rounded-card border border-line bg-surface p-6 sm:p-8">
            <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">Send an enquiry</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-2">
              The more you share, the more useful Fion’s first reply can be. No mailing list, no sales calls — just a
              conversation about whether the studio is the right fit.
            </p>
            <div className="mt-7">
              <ContactForm services={serviceOptions} />
            </div>
          </div>

          <div className="grid gap-4">
            <div id="visit" className="rounded-card border border-line bg-surface p-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep">Visit the studio</h2>
              <address className="mt-4 flex gap-3 text-sm not-italic leading-relaxed text-ink-2">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand-deep" />
                <span>
                  <span className="block font-semibold text-ink">FC Fitness</span>
                  {site.address.street}
                  <br />
                  {site.address.suburb} {site.address.state} {site.address.postcode}
                </span>
              </address>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener"
                className="btn btn-secondary mt-5 w-full"
              >
                Get directions
              </a>
              <p className="mt-4 text-xs leading-relaxed text-ink-2">
                The studio is private and air-conditioned, with parking nearby. It’s a residential area, so please
                arrive at your session time rather than early.
              </p>
            </div>

            <div className="rounded-card border border-line bg-surface p-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep">Opening hours</h2>
              <dl className="mt-4 grid gap-2 text-sm text-ink-2">
                {site.hours.map((row) => (
                  <div key={row.days} className="flex items-baseline justify-between gap-4 border-b border-line pb-2 last:border-0 last:pb-0">
                    <dt>{row.days}</dt>
                    <dd className="text-right font-medium text-ink">
                      {row.open ? `${row.open} – ${row.close}` : "Closed"}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-ink-2">
                <Clock className="mt-0.5 size-4 shrink-0 text-brand-deep" />
                Early before work, at lunchtime or before school pick-up — ask and we’ll find a time that fits.
              </p>
            </div>

            <div className="rounded-card border border-line bg-surface p-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep">Prefer to talk?</h2>
              <div className="mt-4 grid gap-2.5">
                <a
                  href={site.phone.href}
                  className="flex items-center gap-3 text-sm font-medium text-ink hover:text-brand-deep"
                >
                  <Phone className="size-4 text-brand-deep" />
                  Call {site.phone.display}
                </a>
                <a
                  href={site.phone.sms}
                  className="flex items-center gap-3 text-sm font-medium text-ink hover:text-brand-deep"
                >
                  <Message className="size-4 text-brand-deep" />
                  Text {site.phone.display}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-sm font-medium text-ink hover:text-brand-deep"
                >
                  <Mail className="size-4 text-brand-deep" />
                  {site.email}
                </a>
              </div>
              <div className="mt-5 flex items-center gap-2 border-t border-line pt-4">
                <a
                  href={site.socials.instagram.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={`${site.socials.instagram.label} — ${site.socials.instagram.handle}`}
                  className="grid size-9 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:text-brand-deep"
                >
                  <Instagram className="size-4" />
                </a>
                <a
                  href={site.socials.facebook.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={`${site.socials.facebook.label} — ${site.socials.facebook.handle}`}
                  className="grid size-9 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:text-brand-deep"
                >
                  <Facebook className="size-4" />
                </a>
                <span className="text-xs text-ink-2">Follow the community</span>
              </div>
            </div>

            <p className="px-1 text-xs leading-relaxed text-ink-2">
              Enquiries are used only to reply to you. Read the{" "}
              <Link
                href="/privacy"
                className="font-semibold text-brand-deep underline decoration-brand/40 underline-offset-4 hover:decoration-brand-deep"
              >
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-12">
        <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-2">
            New to training? The{" "}
            <Link href="/services/introductory-session" className="font-semibold text-brand-deep">
              $20 introductory session
            </Link>{" "}
            is the easiest place to start.
          </p>
          <Link href="/pricing" className="btn btn-secondary w-fit">
            See pricing
          </Link>
        </div>
      </section>
    </>
  );
}
