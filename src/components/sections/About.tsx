import { useTranslation } from "react-i18next";

export function About() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";

  return (
    <section id="about" className="py-24 md:py-28 px-5 sm:px-6 border-t border-border">
      {/* Container with dir="ltr" to prevent RTL from swapping grid columns */}
      <div dir="ltr" className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div dir={isRtl ? "rtl" : undefined} className={isRtl ? "text-right" : undefined}>
          <h2 className="text-xs tracking-[0.4em] uppercase text-muted mb-5 font-normal">
            {t("about.heading")}
          </h2>
          <p className="text-3xl md:text-4xl font-light tracking-wide text-ink">
            {t("about.name")}
          </p>
          <span className="block w-16 h-px bg-muted my-8" />
          <p className="text-base md:text-lg text-muted font-light leading-relaxed whitespace-pre-line">
            {t("about.bio")}
          </p>
          <ul className="marker-dot mt-8 space-y-3 text-base text-muted font-light leading-relaxed">
            {(t("about.credentials_list", { returnObjects: true }) as string[]).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center md:justify-end order-first md:order-last">
          <div className="card-lift w-full max-w-sm aspect-[4/5] overflow-hidden rounded-xl">
            <img
              src="/valentin.jpg"
              alt="Валентин Максимов — специалист по работе с зависимостями, Израиль"
              loading="lazy"
              decoding="async"
              width={512}
              height={512}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
