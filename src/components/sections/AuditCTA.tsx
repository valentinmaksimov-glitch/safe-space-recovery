import { useTranslation } from "react-i18next";

export function AuditCTA() {
  const { t } = useTranslation();

  return (
    <section id="audit" className="py-24 md:py-28 px-5 sm:px-6 bg-accent text-paper border-t border-border">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl md:text-4xl font-medium tracking-wide leading-tight text-paper">
          {t("audit.heading")}
        </h2>
        <p className="text-base md:text-lg text-paper/90 font-light leading-relaxed mt-6 max-w-2xl mx-auto">
          {t("audit.description")}
        </p>
        <div className="mt-10">
          <a
            href={t("audit.tally_url")}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-lift inline-flex items-center justify-center bg-paper text-accent hover:bg-paper/90 rounded-md px-10 py-4 text-xs tracking-[0.18em] uppercase font-semibold min-h-[48px] shadow-sm transition-all"
          >
            {t("audit.button")}
          </a>
        </div>
      </div>
    </section>
  );
}