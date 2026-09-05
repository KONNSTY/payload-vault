"use client";

/**
 * Full-viewport film-grain texture.
 *
 * Sits above the canvas and below all content, purely decorative: it breaks up
 * the flat dark background so large empty surfaces do not read as sterile.
 * Rendered as an inline SVG `feTurbulence` so it costs no network request.
 */
export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] select-none opacity-[0.035] mix-blend-overlay"
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="hookguard-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves={4}
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hookguard-grain)" />
      </svg>
    </div>
  );
}

export default GrainOverlay;
