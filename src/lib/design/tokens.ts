/**
 * HookGuard design tokens for JavaScript consumers.
 *
 * Tailwind's `@theme` block in `src/app/globals.css` is the source of truth for
 * CSS. This module mirrors the subset that motion values, canvas/SVG drawing and
 * chart libraries (recharts) need at runtime, where CSS custom properties are
 * not available.
 */

/** Framer Motion spring used for every interactive transition. */
export const SPRING_CONFIG = {
  type: "spring",
  stiffness: 400,
  damping: 30,
} as const;

/** Same physics without the `type` key, for `transition={{ ...SPRING }}` merges. */
export const SPRING = {
  stiffness: 400,
  damping: 30,
} as const;

/** Delay between children in a staggered list/grid entrance, in seconds. */
export const STAGGER_CHILDREN = 0.06 as const;

/** Page canvas — the deepest background layer. */
export const CANVAS = "#090A0C" as const;

/** Primary text and accent colour — reads as near-white on the canvas. */
export const ACCENT_PRIMARY = "#E2E8F0" as const;

/** Delivery failure / permanent error. */
export const DANGER = "#F43F5E" as const;

/** Successful delivery (2xx). */
export const SUCCESS = "#10B981" as const;

/** Dead-letter queue / degraded, needs-attention state. */
export const WARNING = "#F59E0B" as const;

/** Translucent surface fills and hairline borders. */
export const SURFACE = "rgba(255, 255, 255, 0.025)" as const;
export const SURFACE_BORDER = "rgba(255, 255, 255, 0.07)" as const;
export const SURFACE_BORDER_HOVER = "rgba(255, 255, 255, 0.16)" as const;

/** Muted body copy (zinc-400). */
export const TEXT_MUTED = "#A1A1AA" as const;

/**
 * Semantic colour lookup keyed by event delivery status, for charts and
 * status pills.
 */
export const STATUS_COLORS = {
  success: SUCCESS,
  pending: TEXT_MUTED,
  retrying: WARNING,
  failed: DANGER,
  dlq: WARNING,
} as const;

export type StatusColorKey = keyof typeof STATUS_COLORS;
