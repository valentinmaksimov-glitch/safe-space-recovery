import { useTranslation } from "react-i18next";

const WHATSAPP_URL = "https://wa.me/972000000000";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-paper px-6 pt-24"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide text-ink leading-tight">
          {t("hero.title")}
        </h1>
        <p className="text-base md:text-lg text-muted font-light leading-relaxed max-w-2xl mx-auto mt-8">
          {t("hero.subtitle")}
        </p>
        <span className="hairline my-10" />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-quiet"
          >
            {t("hero.cta_primary")}
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.18em] uppercase text-ink border border-ink px-8 py-4 hover:bg-ink hover:text-paper transition-all duration-500"
          >
            {t("hero.cta_secondary")}
          </a>
        </div>
        <p className="text-xs tracking-widest text-muted mt-10 leading-relaxed">
          {t("hero.trust")}
        </p>
      </div>
    </section>
  );
}
