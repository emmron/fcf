import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#16120e",
          color: "#f5f0e6",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 9999,
              background: "#ff541f",
              color: "#1b120c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontStyle: "italic",
              fontWeight: 700,
            }}
          >
            FC
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>FC Fitness</span>
            <span style={{ fontSize: 17, letterSpacing: 3, color: "rgba(245,240,230,0.55)", textTransform: "uppercase" }}>
              Fion Chan · Tapping, Perth
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 20, letterSpacing: 4, textTransform: "uppercase", color: "#ff541f", fontWeight: 600 }}>
            Private personal training
          </span>
          <span style={{ marginTop: 22, fontSize: 86, lineHeight: 1.02, fontWeight: 700, letterSpacing: -2, maxWidth: 900 }}>
            Stronger, on your terms.
          </span>
          <span style={{ marginTop: 24, fontSize: 26, color: "rgba(245,240,230,0.65)" }}>
            45 Galileo Avenue, Tapping WA · $20 introductory session
          </span>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <span style={{ height: 10, flex: 1, background: "#ff541f", borderRadius: 999 }} />
          <span style={{ height: 10, width: 160, background: "rgba(245,240,230,0.2)", borderRadius: 999 }} />
          <span style={{ height: 10, width: 64, background: "rgba(245,240,230,0.2)", borderRadius: 999 }} />
        </div>
      </div>
    ),
    size,
  );
}
