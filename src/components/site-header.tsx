import Link from "next/link";

import { Phone } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { CtaLink } from "@/components/site-ui";
import { nav, primaryCta, site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="FC Fitness — home">
          <span className="grid size-11 place-items-center rounded-full bg-ink font-display text-lg italic text-paper">
            FC
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-semibold tracking-tight text-ink">FC Fitness</span>
            <span className="block text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ink-2">
              Fion Chan · Tapping
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-2 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phone.href}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink/5 xl:inline-flex"
          >
            <Phone className="size-4" />
            {site.phone.display}
          </a>
          <CtaLink
            href={primaryCta.href}
            external={primaryCta.external}
            className="btn btn-primary hidden sm:inline-flex"
          >
            {primaryCta.shortLabel}
          </CtaLink>
          <MobileNav items={nav} cta={primaryCta} phone={site.phone} />
        </div>
      </div>
    </header>
  );
}
