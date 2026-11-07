import Link from "next/link";

import { primaryCta } from "@/content/site";

export default function NotFound() {
  return (
    <section className="container-page grid min-h-[60vh] place-items-center py-24">
      <div className="max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-deep">404 — Not found</p>
        <h1 className="mt-4 font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl">
          That page has left the building.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-2">
          The link may be old or mistyped. Head back to the home page, or start with a $20 introductory session.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-secondary">
            Back to home
          </Link>
          <Link href={primaryCta.href} className="btn btn-primary">
            {primaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
