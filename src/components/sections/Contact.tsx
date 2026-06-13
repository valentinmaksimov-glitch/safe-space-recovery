import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-muted mb-6">
          {t("nav.contact")}
        </p>
        <h2 className="text-3xl md:text-4xl font-light tracking-wide text-ink">
          {t("contact.heading")}
        </h2>
        <p className="text-base text-muted font-light leading-relaxed mt-6">
          {t("contact.subtitle")}
        </p>
        <span className="hairline my-10" />
        <p className="text-xs tracking-widest uppercase text-muted mb-6">
          {t("contact.soon")}
        </p>
        <a href="mailto:hello@valentinmaksimov.com" className="btn-quiet">
          {t("contact.cta")}
        </a>
      </div>
    </section>
  );
}
