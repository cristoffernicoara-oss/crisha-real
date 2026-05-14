/** Flatten nested string records into dot-path keys for lookups. */
export function flattenStrings(prefix: string, obj: Record<string, unknown>): Record<string, string> {
  let out: Record<string, string> = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (typeof v === "string") {
      out[key] = v;
    } else if (v && typeof v === "object" && !Array.isArray(v)) {
      out = { ...out, ...flattenStrings(key, v as Record<string, unknown>) };
    }
  }
  return out;
}
