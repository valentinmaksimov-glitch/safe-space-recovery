import { useTranslation } from "react-i18next";

type Qual = { text: string; link_label?: string };

export function About() {
  const { t, i18n } = useTranslation();
  const quals = t("about.qualifications", { returnObjects: true }) as Qual[];
  const isRtl = i18n.dir() === "rtl";

  return (
    <section id="about" className="py-28 px-6 border-t border-border">
      {/* Container with dir="ltr" to prevent RTL from swapping grid columns */}
      <div dir="ltr" className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Text column — always visually left */}
        <div dir={isRtl ? "rtl" : undefined} className={isRtl ? "text-right" : undefined}>
          <h2 className="text-xs tracking-[0.4em] uppercase text-muted mb-6 font-normal">
            {t("about.heading")}
          </h2>
          <p className="text-3xl md:text-4xl font-light tracking-wide text-ink">
            {t("about.name")}
          </p>
          <span className="block w-16 h-px bg-muted my-10" />
          <p className="text-base md:text-lg text-muted font-light leading-relaxed">
            {t("about.bio")}
          </p>

          <div className="mt-12">
            <h3 className="text-xs tracking-[0.3em] uppercase text-ink mb-6 font-normal">
              {t("about.qualifications_title")}
            </h3>
            <ul className="flex flex-col gap-5">
              {quals.map((q, i) => (
                <li key={i} className="ps-5 border-s border-accent">
                  <p className="text-sm text-muted font-light leading-relaxed">{q.text}</p>
                  {q.link_label && (
                    <a
                      href="#"
                      className="inline-block mt-2 text-xs tracking-widest uppercase text-accent hover:text-ink transition-all duration-500"
                    >
                      {q.link_label} →
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Photo column — always visually right */}
        <div className="flex justify-center md:justify-end order-first md:order-last">
          <div className="w-full max-w-sm aspect-[4/5] overflow-hidden bg-border">
            <img
              src="/valentin.jpg"
              alt="Валентин Максимов — специалист по работе с зависимостями, Израиль"
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
