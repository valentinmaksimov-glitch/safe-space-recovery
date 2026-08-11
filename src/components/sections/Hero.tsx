import { useTranslation } from "react-i18next";
import { trackToSheet } from "@/lib/track";

const TELEGRAM_URL = "https://t.me/V_m_help";

export function Hero() {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage ?? i18n.language ?? "ru";
  const trust = t("hero.trust");
  const trustParts = trust.split("•").map((s) => s.trim()).filter(Boolean);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-stone-50 px-5 sm:px-8 py-24"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Левая колонка (Текст и Кнопки) */}
        <div className="flex flex-col text-start">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-wide text-ink leading-tight">
            {t("hero.title")}
          </h1>
          
          <p className="text-lg md:text-xl text-ink font-medium tracking-wide mt-6">
            {t("hero.subtitle")}
          </p>
          
          <p className="text-base md:text-lg text-ink/80 font-medium leading-relaxed mt-4">
            {t("hero.subtitle_extended")}
          </p>

          <span className="hairline my-10 bg-ink/20" />

          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cta-lift inline-flex items-center justify-center bg-accent text-paper text-xs md:text-sm tracking-[0.15em] uppercase px-8 py-4 min-h-[56px] rounded-md hover:bg-accent-hover font-medium transition-colors w-full sm:w-auto"
            >
              {t("hero.cta_primary")}
            </a>

            
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackToSheet({ sheet: "TG", lang })}
              className="cta-lift inline-flex items-center justify-center gap-3 text-xs md:text-sm tracking-[0.15em] uppercase text-ink border-2 border-ink rounded-md px-8 py-4 whitespace-nowrap hover:bg-ink hover:text-paper min-h-[56px] font-medium transition-colors w-full sm:w-auto"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">