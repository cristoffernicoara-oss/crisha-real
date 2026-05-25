/** Canonical Swedish URL paths (primary routes). */
export const ROUTES = {
  home: "/",
  omOss: "/om-oss",
  tjanster: "/tjanster",
  tjansterMetaAds: "/tjanster/meta-ads",
  tjansterGoogleAds: "/tjanster/google-ads",
  tjansterTiktokAds: "/tjanster/tiktok-ads",
  tjansterWebbdesign: "/tjanster/webbdesign",
  tjansterFullFunnel: "/tjanster/full-funnel",
  fallstudier: "/fallstudier",
  blogg: "/blogg",
  kontakt: "/kontakt",
  karriar: "/karriar",
} as const;

export function fallstudiePath(slug: string) {
  return `${ROUTES.fallstudier}/${slug}`;
}
