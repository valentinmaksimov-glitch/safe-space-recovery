import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGS, type AppLang } from "@/i18n";

const LABELS: Record<AppLang, string> = {
  ru: "РУ",
  he: "עב",
};

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage ?? i18n.language ?? "ru").slice(0, 2) as AppLang;

  return (
    <div className="flex items-center gap-3 text-xs tracking-widest">
      {SUPPORTED_LANGS.map((lng, idx) => (
        <div key={lng} className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => i18n.changeLanguage(lng)}
            className={
              "transition-all duration-500 " +
              (current === lng ? "text-ink" : "text-muted hover:text-ink")
            }
            aria-current={current === lng ? "true" : undefined}
          >
            {LABELS[lng]}
          </button>
          {idx < SUPPORTED_LANGS.length - 1 && (
            <span className="text-border select-none" aria-hidden="true">|</span>
          )}
        </div>
      ))}
    </div>
  );
}
