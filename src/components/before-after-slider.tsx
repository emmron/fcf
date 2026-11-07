"use client";

import Image, { type StaticImageData } from "next/image";
import { useId, useState } from "react";

/**
 * Drag (or use arrow keys) to compare two same-sized photos.
 * The control is a native range input, so it works with keyboard, touch and screen readers.
 */
export function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  label,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  before: StaticImageData;
  after: StaticImageData;
  beforeAlt: string;
  afterAlt: string;
  label: string;
  sizes?: string;
}) {
  const [pos, setPos] = useState(50);
  const id = useId();

  return (
    <figure className="grid gap-3">
      <div
        className="relative overflow-hidden rounded-card bg-paper-2 select-none"
        style={{ aspectRatio: `${after.width} / ${after.height}` }}
      >
        <Image src={after} alt={afterAlt} fill sizes={sizes} placeholder="blur" className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={before} alt={beforeAlt} fill sizes={sizes} placeholder="blur" className="object-cover" />
        </div>
        {/* Divider handle (decorative; the range input below is the real control) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-0.5 bg-paper shadow" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 left-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-ink shadow-md ring-1 ring-black/10">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </span>
        </div>
        <span className="absolute top-3 left-3 rounded-full bg-night/80 px-3 py-1 text-xs font-semibold text-night-ink" aria-hidden="true">
          Before
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-ink" aria-hidden="true">
          After
        </span>
        <label htmlFor={id} className="sr-only">
          {label}: drag to compare before and after
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-valuetext={`${pos}% before photo shown`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
    </figure>
  );
}
