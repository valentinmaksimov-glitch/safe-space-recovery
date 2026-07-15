import { useTranslation } from "react-i18next";

const TELEGRAM_URL = "https://t.me/V_m_help";


export function Hero() {
  const { t } = useTranslation();
  const trust = t("hero.trust");
  const trustParts = trust.split("•").map((s) => s.trim()).filter(Boolean);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-paper px-5 sm:px-6 pt-24 pb-16"
    >
      <div className="max-w-4xl w-full grid md:grid-cols-[1fr_auto] gap-10 md:gap-14 items-center">
        <div className="text-center md:text-start order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl font-light tracking-wide text-ink leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-ink font-light tracking-wide max-w-2xl mx-auto md:mx-0 mt-6">
            {t("hero.subtitle")}
          </p>
          <p className="text-base md:text-lg text-muted font-light leading-relaxed max-w-2xl mx-auto md:mx-0 mt-4">
            {t("hero.subtitle_extended")}
          </p>
          <span className="hairline my-10" />

          {/* Button hierarchy: primary → secondary */}
          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
            <button
              onClick={() =>
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
              }
              className="cta-lift inline-flex items-center justify-center bg-accent text-paper text-xs tracking-[0.18em] uppercase px-8 py-4 min-h-[48px] rounded-sm hover:bg-accent-hover"
            >
              {t("hero.cta_primary")}
            </button>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-lift inline-flex items-center justify-center gap-3 text-xs tracking-[0.18em] uppercase text-muted border border-border px-6 py-4 whitespace-nowrap hover:text-ink hover:border-ink min-h-[48px] rounded-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              {t("hero.cta_telegram")}
            </a>
          </div>

          <p className="text-xs text-muted mt-6 leading-relaxed">
            {t("hero.privacy_badge")}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-2 text-xs tracking-widest text-muted uppercase">
            {trustParts.map((part, i) => (
              <span key={i} className="inline-flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="text-border">•</span>}
                <span>{part}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="card-lift w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-1 ring-border">
            <img
              src="/valentin.jpg"
              alt="Валентин Максимов"
              className="w-full h-full object-cover object-top"
              width={224}
              height={224}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
