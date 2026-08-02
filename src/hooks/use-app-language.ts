import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n, { applyDocumentLang, detectStoredLang } from "@/i18n";

/**
 * Applies the visitor's stored language after mount (SSR renders "ru"
 * deterministically) and keeps <html lang/dir> in sync.
 */
export function useAppLanguage() {
  const { i18n: i18nHook } = useTranslation();

  useEffect(() => {
    const stored = detectStoredLang();
    if (stored !== i18n.language) {
      void i18n.changeLanguage(stored);
    } else {
      applyDocumentLang(stored);
    }
  }, []);

  useEffect(() => {
    applyDocumentLang(i18nHook.resolvedLanguage ?? i18nHook.language ?? "ru");
  }, [i18nHook.resolvedLanguage, i18nHook.language]);

  const lang = i18nHook.resolvedLanguage ?? i18nHook.language ?? "ru";
  return { lang, isHebrew: lang === "he" };
}
