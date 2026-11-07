import Link from "next/link";

import { Facebook, Instagram, Mail, MapPin, Phone } from "@/components/icons";
import { CtaLink } from "@/components/site-ui";
import { nav, primaryCta, site } from "@/content/site";

const copyrightYear = 2026;

export function SiteFooter() {
  return (
    <footer className="bg-night text-night-ink">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="FC Fitness — home">
            <span className="grid size-11 place-items-center rounded-full bg-brand font-display text-lg italic text-brand-ink">
              FC
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">FC Fitness</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-night-ink/60">
            {site.tagline}. Private, one-on-one coaching with Fion Chan — no memberships, no lock-in, and kids
            always welcome.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <a
              href={site.socials.instagram.href}
              target="_blank"
              rel="noopener"
              aria-label={`${site.socials.instagram.label} — ${site.socials.instagram.handle}`}
              className="grid size-10 place-items-center rounded-full border border-white/15 text-night-ink transition-colors hover:border-brand hover:text-brand"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={site.socials.facebook.href}
              target="_blank"
              rel="noopener"
              aria-label={`${site.socials.facebook.label} — ${site.socials.facebook.handle}`}
              className="grid size-10 place-items-center rounded-full border border-white/15 text-night-ink transition-colors hover:border-brand hover:text-brand"
            >
              <Facebook className="size-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-night-ink/60">Explore</h2>
          <ul className="mt-4 grid gap-2.5">
            <li>
              <Link href="/" className="text-sm text-night-ink/75 transition-colors hover:text-brand">
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-night-ink/75 transition-colors hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="text-sm text-night-ink/75 transition-colors hover:text-brand">
                Privacy
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-night-ink/60">Visit</h2>
          <address className="mt-4 grid gap-2 text-sm not-italic text-night-ink/75">
            <span className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
              <span>
                {site.address.street}
                <br />
                {site.address.suburb} {site.address.state} {site.address.postcode}
              </span>
            </span>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener"
              className="w-fit text-sm font-semibold text-night-ink underline decoration-white/30 underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
            >
              Get directions
            </a>
          </address>
          <dl className="mt-5 grid gap-1.5 text-sm text-night-ink/60">
            {site.hours.map((row) => (
              <div key={row.days} className="flex justify-between gap-4">
                <dt>{row.days}</dt>
                <dd className="text-right text-night-ink/80">
                  {row.open ? `${row.open} – ${row.close}` : "Closed"}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-night-ink/60">Get in touch</h2>
          <div className="mt-4 grid gap-3 text-sm">
            <a
              href={site.phone.href}
              className="inline-flex items-center gap-2 text-night-ink/80 transition-colors hover:text-brand"
            >
              <Phone className="size-4 text-brand" />
              {site.phone.display}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-night-ink/80 transition-colors hover:text-brand"
            >
              <Mail className="size-4 text-brand" />
              {site.email}
            </a>
          </div>
          <CtaLink
            href={primaryCta.href}
            external={primaryCta.external}
            className="btn btn-primary mt-6 w-full"
          >
            {primaryCta.shortLabel}
          </CtaLink>
          <p className="mt-4 text-xs leading-relaxed text-night-ink/60">
            Coaching in {site.languages.slice(0, -1).join(", ")} and {site.languages.at(-1)}.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-night-ink/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {copyrightYear} {site.name}. All rights reserved.</p>
          <p>
            Private personal training in Tapping, Perth ·{" "}
            <Link href="/privacy" className="underline decoration-white/20 underline-offset-4 hover:text-brand">
              Privacy policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
