"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef, useState } from "react";

/**
 * Shows a lightweight poster until the visitor presses play, so the 3 MB video never
 * loads unless someone asks for it. Native controls take over once playing.
 */
export function VideoFacade({
  src,
  poster,
  posterAlt,
  title,
  durationLabel,
  className = "",
  sizes = "(min-width: 1024px) 60vw, 100vw",
}: {
  src: string;
  poster: StaticImageData;
  posterAlt: string;
  title: string;
  durationLabel?: string;
  className?: string;
  sizes?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={`relative isolate aspect-video overflow-hidden bg-night ${className}`}>
      {playing ? (
        <video
          ref={(el) => {
            videoRef.current = el;
            el?.focus();
          }}
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster.src}
          controls
          autoPlay
          playsInline
          preload="auto"
          aria-label={title}
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 grid place-items-center text-left"
          aria-label={`Play video: ${title}${durationLabel ? ` (${durationLabel})` : ""}`}
        >
          <Image
            src={poster}
            alt={posterAlt}
            fill
            sizes={sizes}
            placeholder="blur"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
          />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night/70 via-night/10 to-transparent" />
          <span
            aria-hidden="true"
            className="relative grid size-20 place-items-center rounded-full bg-paper/95 text-ink shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110 motion-reduce:transition-none"
          >
            <svg viewBox="0 0 24 24" className="ml-1 size-8" fill="currentColor" aria-hidden="true">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" />
            </svg>
          </span>
          {durationLabel ? (
            <span className="absolute bottom-4 left-4 rounded-full bg-night/75 px-3 py-1 text-xs font-semibold tracking-wide text-night-ink">
              {durationLabel}
            </span>
          ) : null}
        </button>
      )}
    </div>
  );
}
