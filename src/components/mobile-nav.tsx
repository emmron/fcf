"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NavItem = { label: string; href: string };

/**
 * Full-screen mobile menu built on the native <dialog> element, which gives us
 * focus trapping, Escape-to-close and an inert page behind it for free.
 */
export function MobileNav({
  items,
  cta,
  phone,
}: {
  items: readonly NavItem[];
  cta: { label: string; href: string; external?: boolean };
  phone: { display: string; href: string };
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const show = () => {
    dialogRef.current?.showModal();
    setOpen(true);
  };
  const close = () => dialogRef.current?.close();

  // Lock page scroll while open.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Close if the route changes while open (e.g. browser back).
  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        onClick={show}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-ink/5 lg:hidden"
      >
        <span className="sr-only">Open menu</span>
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
        </svg>
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        aria-label="Site menu"
        className="mobile-nav m-0 h-dvh max-h-none w-full max-w-none bg-paper p-0 text-ink backdrop:bg-night/40 lg:hidden"
      >
        <div className="flex h-full flex-col px-5 pt-4 pb-8">
          <div className="flex items-center justify-between">
            <span className="font-display text-lg">Menu</span>
            <button
              type="button"
              onClick={close}
              className="inline-flex size-11 items-center justify-center rounded-full hover:bg-ink/5"
            >
              <span className="sr-only">Close menu</span>
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-8 flex-1">
            <ul className="grid gap-1">
              <li>
                <Link href="/" onClick={close} aria-current={pathname === "/" ? "page" : undefined} className="mobile-nav-link">
                  Home
                </Link>
              </li>
              {items.map((item) => {
                const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link href={item.href} onClick={close} aria-current={current ? "page" : undefined} className="mobile-nav-link">
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="grid gap-3">
            {cta.external ? (
              <a href={cta.href} target="_blank" rel="noopener" className="btn btn-primary w-full justify-center" onClick={close}>
                {cta.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <Link href={cta.href} className="btn btn-primary w-full justify-center" onClick={close}>
                {cta.label}
              </Link>
            )}
            <a href={phone.href} className="btn btn-secondary w-full justify-center">
              Call {phone.display}
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
