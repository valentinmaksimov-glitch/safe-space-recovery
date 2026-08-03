import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const payloadSchema = z.object({
  sheet: z.enum(["memo", "appointment", "TG"]),
  name: z.string().trim().max(120).optional(),
  phone: z.string().trim().max(60).optional(),
  worries: z.string().trim().max(2000).optional(),
  lang: z.string().trim().max(10).optional(),
});

export type SheetPayload = z.infer<typeof payloadSchema>;

/**
 * Sends a row to the Google Sheets webhook (Apps Script Web App).
 * The webhook receives { sheet, date, name, phone, worries, lang } as JSON
 * and appends a row to the matching tab (memo / appointment / TG).
 */
export const logToSheet = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => payloadSchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env["GOOGLE_SHEETS_WEBHOOK_URL"];
    if (!url) {
      console.warn("GOOGLE_SHEETS_WEBHOOK_URL is not configured");
      return { success: false as const, reason: "not_configured" as const };
    }

    const body = {
      sheet: data.sheet,
      date: new Date().toISOString(),
      name: data.name ?? "",
      phone: data.phone ?? "",
      worries: data.worries ?? "",
      lang: data.lang ?? "",
    };

    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      return { success: true as const };
    } catch (err) {
      console.error("Google Sheets webhook failed", err);
      return { success: false as const, reason: "request_failed" as const };
    }
  });
