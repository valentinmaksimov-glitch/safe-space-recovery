import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "./locales/ru.json";
import he from "./locales/he.json";

export type AppLang = "ru" | "he";

export const SUPPORTED_LANGS: AppLang[] = ["ru", "he"];

const STORAGE_KEY = "vm-lang";

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        ru: { translation: ru },
        he: { translation: he },
      },
      // Deterministic initial language for SSR + first client render.
      // We upgrade to the visitor's stored preference in useEffect after mount
      // to avoid hydration mismatches.
      lng: "ru",
      fallbackLng: "ru",
      supportedLngs: SUPPORTED_LANGS,
      interpolation: { escapeValue: false },
      returnObjects: true,
    });
}

export function detectStoredLang(): AppLang {
  if (typeof window === "undefined") return "ru";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ru" || stored === "he") return stored;
  } catch {
    // ignore storage errors (private mode, etc.)
  }
  return "ru";
}

export function applyDocumentLang(lang: string) {
  if (typeof document === "undefined") return;
  const isHe = lang === "he";
  document.documentElement.dir = isHe ? "rtl" : "ltr";
  document.documentElement.lang = lang;
}

i18n.on("languageChanged", (lng) => {
  applyDocumentLang(lng);
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, lng);
    } catch {
      // ignore
    }
    try {
      // Also persist as a cookie so SSR (error page, initial render) can detect it.
      document.cookie = `${STORAGE_KEY}=${lng}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {
      // ignore
    }
  }
});

export default i18n;
