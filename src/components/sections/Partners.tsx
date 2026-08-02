import { useTranslation } from "react-i18next";

const WHATSAPP_URL = "https://wa.me/972506096289";

export function Partners() {
  const { t } = useTranslation();

  return (
    <section id="partners" className="w-full bg-secondary py-12 border-t border-border">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-ink">
          {t("partners.heading")}
        </h2>
        <p className="mt-5 text-sm md:text-base text-muted leading-relaxed">
          {t("partners.text")}
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-lift mt-8 inline-flex items-center justify-center min-h-[48px] px-8 py-3 border border-ink text-ink text-xs tracking-widest uppercase hover:bg-ink hover:text-paper transition-colors duration-300"
        >
          {t("partners.cta")}
        </a>
      </div>
    </section>
  );
}
