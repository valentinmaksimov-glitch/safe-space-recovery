import { useTranslation } from "react-i18next";

export function About() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";

  return (
    <section id="about" className="py-24 md:py-28 px-5 sm:px-8 border-t border-border bg-paper">
      <div className="mx-auto max-w-5xl">
        <div dir={isRtl ? "rtl" : undefined} className={isRtl ? "text-right" : "text-left"}>
          
          {/* Заголовок секции */}
          <h2 className="text-xs tracking-[0.3em] uppercase text-ink/70 mb-5 font-semibold">
            {t("about.heading")}
          </h2>
          
          {/* Имя */}
          <p className="text-3xl md:text-4xl font-semibold tracking-wide text-ink">
            {t("about.name")}
          </p>
          
          <span className="block w-16 h-px bg-ink/20 my-8" />
          
          {/* Биография с правильными отступами между абзацами */}
          <div className="space-y-6 text-base md:text-lg text-ink/90 font-medium leading-relaxed">
            {t("about.bio").split('\n').map((paragraph, index) => (
              paragraph.trim() ? (
                <p key={index}>{paragraph}</p>
              ) : null
            ))}
          </div>
          
          {/* Список регалий с идеально выровненными точками */}
          <ul className="mt-10 space-y-4 text-base text-ink/90 font-medium leading-relaxed">
            {(t("about.credentials_list", { returnObjects: true }) as string[]).map((item) => (
              <li key={item} className="flex items-start gap-3.5">
                <span className="text-accent text-lg leading-none select-none">•</span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}