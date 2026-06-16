import { useTranslation } from "react-i18next";

type Qual = { text: string; link_label: string };

export function About() {
  const { t } = useTranslation();
  const quals = t("about.qualifications", { returnObjects: true }) as Qual[];

  return (
    <section id="about" className="py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl grid md:grid-cols-5 gap-12 md:gap-16 items-start">
        <div className="md:col-span-2">
          <div className="w-full max-w-md aspect-[4/5] overflow-hidden bg-border">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
              alt={t("about.name")}
              loading="lazy"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs tracking-[0.4em] uppercase text-muted mb-6">
            {t("about.heading")}
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-ink">
            {t("about.name")}
          </h2>
          <span className="block w-16 h-px bg-muted my-10" />
          <p className="text-base md:text-lg text-muted font-light leading-relaxed">
            {t("about.bio")}
          </p>

          <div className="mt-12">
            <p className="text-xs tracking-[0.3em] uppercase text-ink mb-6">
              {t("about.qualifications_title")}
            </p>
            <ul className="flex flex-col gap-5">
              {quals.map((q, i) => (
                <li key={i} className="ps-5 border-s border-accent">
                  <p className="text-sm text-muted font-light leading-relaxed">
                    {q.text}
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-2 text-xs tracking-widest uppercase text-accent hover:text-ink transition-all duration-500"
                  >
                    {q.link_label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
