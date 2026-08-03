import { logToSheet, type SheetPayload } from "@/lib/api/sheets.functions";

/** Fire-and-forget row append; never blocks or breaks the UI flow. */
export function trackToSheet(payload: SheetPayload) {
  try {
    return logToSheet({ data: payload }).catch(() => undefined);
  } catch {
    return Promise.resolve(undefined);
  }
}
