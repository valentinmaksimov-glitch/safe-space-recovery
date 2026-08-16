import { useTranslation } from "react-i18next";

export function About() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";

  return (
    <section id="about" className="py-24 md:py-28 px-5 sm:px-8 border-t border-border bg-paper">
      <div className="mx-auto max-w-5xl">
        <div dir={isRtl ? "rtl" : undefined} className={isRtl ? "text-right" : "text-left"}>
          
          {/* Маленький верхний заголовок секции */}
          <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-5 font-semibold">
            {t("about.heading")}
          </h2>
          
          {/* Большое Имя */}
          <p className="text-3xl md:text-4xl font-semibold tracking-wide text-ink">
            {t("about.name")}
          </p>
          
          <span className="block w-16 h-px bg-accent/30 my-8" />
          
          {/* Автоматическое разбиение биографии на параграфы с большими отступами */}
          <div className="space-y-6 text-base md:text-lg text-ink/90 font-normal leading-relaxed max-w-4xl">
            {t("about.bio")
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
          
          {/* Список регалий с идеально выровненными точками по первой строке */}
          <ul className="mt-10 space-y-4 text-base md:text-lg text-ink/90 font-normal leading-relaxed">
            {(t("about.credentials_list", { returnObjects: true }) as string[]).map((item, index) => (
              <li key={index} className="flex items-start gap-3.5">
                <span className="text-accent font-bold text-xl leading-none select-none mt-1">
                  •
                </span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}