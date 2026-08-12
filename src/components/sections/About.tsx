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
          
          {/* Биография: разбита на смысловые абзацы с большими отступами и выделениями */}
          <div className="space-y-6 text-base md:text-lg text-ink/90 font-medium leading-relaxed max-w-4xl">
            <p>
              Меня зовут Валентин Максимов. Я <span className="font-bold text-accent">помогаю</span> людям, которые чувствуют, что застряли в бесконечном круге неудач, потери контроля над жизнью или разрушают свои отношения и карьеру.
            </p>
            <p>
              Моя задача — помочь вам найти корень проблемы и вернуть контроль над вашей жизнью.
            </p>
            <p>
              Я также выступаю в роли ведущего и организатора групп поддержки, где участники находят силу в обмене опытом и взаимной помощи.
            </p>
          </div>
          
          {/* Список регалий с идеально выровненными точками */}
          <ul className="mt-10 space-y-5 text-base md:text-lg text-ink/90 font-medium leading-relaxed">
            {(t("about.credentials_list", { returnObjects: true }) as string[]).map((item, index) => (
              <li key={index} className="relative pl-6">
                <span className="absolute left-0 top-[0.1em] text-accent font-bold text-xl leading-none select-none">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}