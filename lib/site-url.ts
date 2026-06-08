/** Canonical public site origin (no trailing slash). Override in Vercel: NEXT_PUBLIC_SITE_URL */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.crisha.se";
