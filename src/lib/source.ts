/**
 * Traffic-source code for the close-ones landing pages.
 * Browser-only: SSR-safe (returns empty when there is no window).
 * Result is cached in sessionStorage under "src" so it survives reloads/navigation.
 */

const STORAGE_KEY = "src";

type SourceState = { code: string; utm_source: string; utm_campaign: string };

const EMPTY: SourceState = { code: "", utm_source: "", utm_campaign: "" };

let cached: SourceState | null = null;

function search(): URLSearchParams | null {
  if (typeof window === "undefined") return null;
  try {
    return new URLSearchParams(window.location.search);
  } catch {
    return null;
  }
}

function readStored(): SourceState | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<SourceState>;
    return {
      code: typeof parsed.code === "string" ? parsed.code : "",
      utm_source: typeof parsed.utm_source === "string" ? parsed.utm_source : "",
      utm_campaign: typeof parsed.utm_campaign === "string" ? parsed.utm_campaign : "",
    };
  } catch {
    return null;
  }
}

function writeStored(state: SourceState) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable (private mode etc.) — keep going */
  }
}

function codeOf(p: URLSearchParams): string {
  const utm = (p.get("utm_source") ?? "").trim().toLowerCase();
  if (p.get("gclid") || utm === "google") return "G";
  if (p.get("fbclid") || ["facebook", "fb", "instagram", "ig", "meta"].includes(utm)) return "F";
  if (utm) return "O";
  return "";
}

function state(): SourceState {
  if (cached) return cached;
  const p = search();
  if (!p) return EMPTY; // SSR
  const stored = readStored();
  const hasNewParams = Boolean(p.get("gclid") || p.get("fbclid") || p.get("utm_source"));
  if (!hasNewParams && stored) {
    cached = stored;
    return cached;
  }
  const next: SourceState = {
    code: codeOf(p),
    utm_source: (p.get("utm_source") ?? "").trim(),
    utm_campaign: (p.get("utm_campaign") ?? "").trim() || (stored?.utm_campaign ?? ""),
  };
  if (next.code || next.utm_source || next.utm_campaign) writeStored(next);
  cached = next;
  return cached;
}

/** "G" | "F" | "O" | "" */
export function getSourceCode(): string {
  return state().code;
}

/** e.g. "G | utm_campaign=blizkie_nov", or "" when there is nothing to report. */
export function getSourceDetails(): string {
  const s = state();
  const parts: string[] = [];
  if (s.code) parts.push(s.code);
  if (s.utm_campaign) parts.push(`utm_campaign=${s.utm_campaign}`);
  return parts.join(" | ");
}
