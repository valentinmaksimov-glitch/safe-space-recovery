import { useTranslation } from "react-i18next";
import { trackToSheet } from "@/lib/track";

const TELEGRAM_URL = "https://t.me/V_m_help";

export function Hero() {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage ?? i18n.language ?? "ru";
  const isRtl = i18n.dir() === "rtl";

  return (
    <section 
      dir={isRtl ? "rtl" : "ltr"} 
      className="pt-32 pb-20 md:pt-40 md:pb-28 px-5 sm:px-8 bg-paper"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Левая колонка — Текст и Кнопки */}
          <div className={`lg:col-span-7 space-y-8 ${isRtl ? "text-right" : "text-left"}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-ink leading-[1.18]">
              {t("hero.title")}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-ink/80 font-normal leading-relaxed max-w-2xl">
              {t("hero.subtitle")}
            </p>

            <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 ${isRtl ? "sm:flex-row-reverse justify-end" : ""}`}>
              <a
                href="#audit"
                className="cta-lift inline-flex items-center justify-center bg-accent text-paper text-xs md:text-sm tracking-[0.15em] uppercase font-semibold px-8 py-4 rounded-md transition-colors min-h-[48px]"
              >
                {t("hero.cta_primary")}
              </a>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackToSheet({ sheet: "TG", lang })}
                className="cta-lift inline-flex items-center justify-center gap-3 text-xs md:text-sm tracking-[0.15em] uppercase font-semibold text-ink border border-border px-8 py-4 rounded-md hover:border-ink transition-colors min-h-[48px]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                {t("hero.cta_telegram")}
              </a>
            </div>
          </div>

          {/* Правая колонка — Фотография и подпись */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full">
            <div className="w-full max-w-md aspect-[4/5] rounded-xl overflow-hidden shadow-sm border border-border bg-paper">
              <img
                src="/valentin.jpg"
                alt={t("about.name")}
                loading="eager"
                decoding="async"
                width={600}
                height={750}
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* ВЫРАВНИВАНИЕ ТЕКСТА ПОД ФОТО: строго по языку */}
            <div className={`mt-5 w-full max-w-md ${isRtl ? "text-right" : "text-left"}`}>
              <p className="text-xl md:text-2xl font-semibold text-ink tracking-tight">
                {t("about.name")}
              </p>
              <p className="text-sm md:text-base text-muted mt-1.5 leading-relaxed font-normal">
                {t("hero.role_description")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}