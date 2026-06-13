import { useTranslation } from "react-i18next";

type Item = { title: string; desc: string };

export function Methodology() {
  const { t } = useTranslation();
  const items = t("methodology.items", { returnObjects: true }) as Item[];

  return (
    <section id="methodology" className="py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.4em] uppercase text-muted mb-6 text-center">
          {t("methodology.heading")}
        </p>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 mt-12">
          {items.map((it) => (
            <div key={it.title} className="ps-6 border-s-2 border-accent">
              <h3 className="text-base font-normal text-ink tracking-wide">
                {it.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mt-3">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
