import { useTranslation } from "react-i18next";

export function Groups() {
  const { t } = useTranslation();

  return (
    <section id="groups" className="py-24 md:py-28 px-5 sm:px-6 border-t border-border">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-accent mb-5">
          {t("groups.eyebrow")}
        </p>
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-ink mb-6">
          {t("groups.heading")}
        </h2>
        <p className="text-base md:text-lg text-muted font-light leading-relaxed">
          {t("groups.body")}
        </p>
      </div>
    </section>
  );
}
