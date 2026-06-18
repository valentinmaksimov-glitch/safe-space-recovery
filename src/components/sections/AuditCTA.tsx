import { useTranslation } from "react-i18next";

export function AuditCTA() {
  const { t } = useTranslation();

  return (
    <section id="audit" className="py-28 px-6 bg-ink text-paper border-t border-border">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl md:text-4xl font-light tracking-wide leading-tight">
          {t("audit.heading")}
        </h2>
        <p className="text-base md:text-lg text-paper/70 font-light leading-relaxed mt-8">
          {t("audit.description")}
        </p>
        <div className="mt-12">
          <a
            href="https://tally.so/r/eqoJEx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-paper text-paper px-10 py-4 text-xs tracking-[0.18em] uppercase font-normal hover:bg-paper hover:text-ink transition-all duration-500"
          >
            {t("audit.button")}
          </a>
        </div>
      </div>
    </section>
  );
}
