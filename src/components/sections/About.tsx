import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs tracking-[0.4em] uppercase text-muted mb-6">
          {t("nav.about")}
        </p>
        <h2 className="text-3xl md:text-4xl font-light tracking-wide text-ink">
          {t("about.heading")}
        </h2>
        <p className="text-sm tracking-widest uppercase text-muted mt-3">
          {t("about.role")}
        </p>
        <span className="hairline my-10 !mx-0" style={{ marginInlineStart: 0 }} />
        <p className="text-base md:text-lg text-muted font-light leading-relaxed">
          {t("about.bio")}
        </p>
      </div>
    </section>
  );
}
