import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ru from "./locales/ru.json";
import he from "./locales/he.json";
import en from "./locales/en.json";

export type AppLang = "ru" | "he" | "en";

export const SUPPORTED_LANGS: AppLang[] = ["ru", "he", "en"];

const ruHeDetector = {
  name: "ruHeNavigator",
  lookup() {
    if (typeof navigator === "undefined") return undefined;
    const lang = navigator.language || "";
    const code = lang.slice(0, 2).toLowerCase();
    if (code === "ru" || code === "he") return code;
    return undefined;
  },
};

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        ru: { translation: ru },
        he: { translation: he },
        en: { translation: en },
      },
      fallbackLng: "ru",
      supportedLngs: SUPPORTED_LANGS,
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "ruHeNavigator"],
        caches: ["localStorage"],
        lookupLocalStorage: "vm-lang",
      },
      returnObjects: true,
    });
}

LanguageDetector.addDetector(ruHeDetector);

export function applyDocumentLang(lang: string) {
  if (typeof document === "undefined") return;
  const isHe = lang === "he";
  document.documentElement.dir = isHe ? "rtl" : "ltr";
  document.documentElement.lang = lang;
}

i18n.on("languageChanged", applyDocumentLang);

export default i18n;
