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
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              {t("hero.cta_telegram")}
            </a>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <p className="text-xs text-ink/80 font-medium leading-relaxed inline-block border border-border bg-white rounded-md shadow-sm px-4 py-2">
              {t("hero.first_meeting_note")}
            </p>
            <p className="text-xs text-ink/80 font-medium leading-relaxed inline-block border border-border bg-white rounded-md shadow-sm px-4 py-2">
              {t("hero.privacy_badge")}
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs tracking-widest text-ink/70 font-medium mt-6 uppercase">
            {trustParts.map((part, i) => (
              <span key={i} className="inline-flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="text-border">•</span>}
                <span>{part}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Правая колонка (Ровно одно прямоугольное фото) */}
        <div className="flex flex-col items-center lg:items-end w-full">
          <img 
            src="/valentin.jpg"
            alt="Валентин Максимов"
            loading="eager" 
            fetchPriority="high"
            width={800}
            height={1067}
            className="w-full max-w-md object-cover rounded-md shadow-md aspect-[3/4]"
          />
          
          <div className="mt-6 text-sm font-medium text-ink bg-white border border-border rounded-md px-5 py-4 shadow-sm max-w-md w-full text-center lg:text-start">
            {t("hero.credentials")}
          </div>
        </div>

      </div>
    </section>
  );
}