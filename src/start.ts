import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage, detectLangFromRequest } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    let lang: "ru" | "he" = "ru";
    try {
      // Best-effort: no request object here; keep default
      lang = detectLangFromRequest(undefined);
    } catch {
      // ignore
    }
    return new Response(renderErrorPage(lang), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));
