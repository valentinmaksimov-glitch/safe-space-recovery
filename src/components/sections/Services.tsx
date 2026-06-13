import { useTranslation } from "react-i18next";

type Item = { title: string; duration: string; desc: string };

export function Services() {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true }) as Item[];

  return (
    <section id="services" className="py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.4em] uppercase text-muted mb-12 text-center">
          {t("services.heading")}
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <article
              key={it.title}
              className="border border-border rounded-sm p-8 hover:border-accent transition-all duration-500 bg-paper"
            >
              <p className="text-xs text-muted tracking-widest uppercase">
                {it.duration}
              </p>
              <h3 className="text-lg font-light tracking-wide text-ink mt-4">
                {it.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mt-4">
                {it.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
