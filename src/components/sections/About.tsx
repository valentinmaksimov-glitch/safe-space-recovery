import { useTranslation } from "react-i18next";

export function About() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";

  return (
    <section id="about" className="py-24 md:py-28 px-5 sm:px-8 border-t border-border bg-paper">
      {/* Увеличили максимальную ширину с max-w-4xl до max-w-5xl для более широкого отображения */}
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
          
          {/* Основной текст био с выделением ключевых слов */}
          <p className="text-base md:text-lg text-ink/90 font-medium leading-relaxed whitespace-pre-line">
            {t("about.bio")}
          </p>
          
          {/* Список регалий (убран класс marker-dot, чтобы избежать двойных точек) */}
          <ul className="mt-8 space-y-3 text-base text-ink/90 font-medium leading-relaxed">
            {(t("about.credentials_list", { returnObjects: true }) as string[]).map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-accent mt-1.5 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}