/** Helpers for Europe/Stockholm business hours. */

export function nowInTz(timeZone = "Europe/Stockholm"): Date {
  // Wall-clock parts in target TZ as a Date for comparisons via formatters
  return new Date();
}

export function getZonedParts(
  date: Date,
  timeZone = "Europe/Stockholm"
): { weekday: number; hour: number; minute: number; dateKey: string } {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const parts = Object.fromEntries(
    fmt.formatToParts(date).map((p) => [p.type, p.value])
  ) as Record<string, string>;

  const weekdayMap: Record<string, number> = {
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
    Sun: 0,
  };

  return {
    weekday: weekdayMap[parts.weekday] ?? 0,
    hour: Number(parts.hour),
    minute: Number(parts.minute),
    dateKey: `${parts.year}-${parts.month}-${parts.day}`,
  };
}

/** Mon–Fri, 08:00–16:00 (exclusive end at 16:00). */
export function isBusinessSendWindow(
  date = new Date(),
  timeZone = "Europe/Stockholm"
): boolean {
  const { weekday, hour } = getZonedParts(date, timeZone);
  if (weekday === 0 || weekday === 6) return false;
  return hour >= 8 && hour < 16;
}

export function randomDelayMs(minMinutes = 15, maxMinutes = 30): number {
  const min = minMinutes * 60 * 1000;
  const max = maxMinutes * 60 * 1000;
  return min + Math.floor(Math.random() * (max - min + 1));
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function monthsAgoIso(months: number, from = new Date()): string {
  const d = new Date(from);
  d.setMonth(d.getMonth() - months);
  return d.toISOString().slice(0, 10);
}

export function parseFlexibleDate(raw: string | number | Date): string | null {
  if (raw instanceof Date && !Number.isNaN(raw.getTime())) {
    return raw.toISOString().slice(0, 10);
  }
  if (typeof raw === "number") {
    // Excel serial date
    const excelEpoch = new Date(Date.UTC(1899, 11, 30));
    const d = new Date(excelEpoch.getTime() + raw * 86400000);
    if (!Number.isNaN(d.getTime())) return d.toISOString().slice(0, 10);
  }
  const s = String(raw).trim();
  if (!s) return null;
  // YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
  // DD/MM/YYYY or DD-MM-YYYY
  const m = s.match(/^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})/);
  if (m) {
    const [, dd, mm, yyyy] = m;
    return `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
  }
  const d = new Date(s);
  if (!Number.isNaN(d.getTime())) return d.toISOString().slice(0, 10);
  return null;
}

export function weeksSince(isoDate: string, now = new Date()): number {
  const start = new Date(`${isoDate}T00:00:00Z`);
  const diff = now.getTime() - start.getTime();
  return Math.max(1, Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) + 1);
}
