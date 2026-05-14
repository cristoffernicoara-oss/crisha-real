export const CARIERE_APPLY_STORAGE_KEY = "crisha-cariere-apply-position";

export function persistCariereApplyPosition(value: string) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(CARIERE_APPLY_STORAGE_KEY, value);
  } catch {
    /* ignore quota / private mode */
  }
}

export function consumeCariereApplyPosition(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const v = sessionStorage.getItem(CARIERE_APPLY_STORAGE_KEY);
    if (v) sessionStorage.removeItem(CARIERE_APPLY_STORAGE_KEY);
    return v;
  } catch {
    return null;
  }
}
