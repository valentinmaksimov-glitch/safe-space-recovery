import { useTranslation } from "react-i18next";

export function Triggers() {
  const { t } = useTranslation();
  const items = t("triggers.items", { returnObjects: true }) as string[];

  return (
    <section id="triggers" className="py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-ink text-center mb-16">
          {t("triggers.heading")}
        </h2>
        <ul className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-5">
              <span className="text-xs tracking-widest text-accent pt-1 min-w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base text-muted font-light leading-relaxed">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
