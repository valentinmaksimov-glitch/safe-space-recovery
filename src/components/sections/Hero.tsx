import { useTranslation } from "react-i18next";

const WHATSAPP_URL = "https://wa.me/972506096289";
const TELEGRAM_URL = "https://t.me/V_m_help";
const PHONE_NUMBER = "050-6096289";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-paper px-6 pt-24"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-3xl md:text-4xl font-light tracking-wide text-ink leading-tight">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl text-ink font-light tracking-wide max-w-2xl mx-auto mt-8">
          {t("hero.subtitle")}
        </p>
        <p className="text-base md:text-lg text-muted font-light leading-relaxed max-w-2xl mx-auto mt-4">
          {t("hero.subtitle_extended")}
        </p>
        <span className="hairline my-10" />

        {/* Button hierarchy: primary → secondary → secondary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary — filled accent */}
          <button
            onClick={() =>
              document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center bg-accent text-paper text-xs tracking-[0.18em] uppercase px-8 py-4 hover:opacity-90 transition-all duration-300 min-h-[44px] rounded-sm"
          >
            {t("hero.cta_primary")}
          </button>

          {/* Secondary — WhatsApp icon + number */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.18em] uppercase text-ink border border-ink px-6 py-4 whitespace-nowrap hover:bg-ink hover:text-paper transition-all duration-500 min-h-[44px]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            {PHONE_NUMBER}
          </a>

          {/* Secondary — Telegram icon + text */}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.18em] uppercase text-ink border border-ink px-6 py-4 whitespace-nowrap hover:bg-ink hover:text-paper transition-all duration-500 min-h-[44px]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            {t("hero.cta_telegram")}
          </a>

        </div>

        {/* Privacy badge */}
        <p className="text-xs text-muted mt-6 leading-relaxed">
          {t("hero.privacy_badge")}
        </p>

        <p className="text-xs tracking-widest text-muted mt-6 leading-relaxed uppercase">
          {t("hero.trust")}
        </p>
      </div>
    </section>
  );
}
