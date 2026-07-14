import { useTranslation } from "react-i18next";

export function Triggers() {
  const { t } = useTranslation();
  const items = t("triggers.items", { returnObjects: true }) as string[];

  return (
    <section id="triggers" className="py-24 md:py-28 px-5 sm:px-6 border-t border-border">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-ink text-center mb-14">
          {t("triggers.heading")}
        </h2>
        <ul className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-accent"
              />
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
