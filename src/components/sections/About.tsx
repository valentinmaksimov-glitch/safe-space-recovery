import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl grid md:grid-cols-5 gap-12 md:gap-16 items-start">
        <div className="md:col-span-2">
          <div className="w-full max-w-md aspect-[4/5] overflow-hidden rounded-sm bg-border">
            <img
              src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=80"
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs tracking-[0.4em] uppercase text-muted mb-6">
            {t("nav.about")}
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-ink">
            {t("about.heading")}
          </h2>
          <p className="text-sm tracking-widest uppercase text-muted mt-3">
            {t("about.role")}
          </p>
          <span className="block w-16 h-px bg-muted my-10" />
          <p className="text-base md:text-lg text-muted font-light leading-relaxed whitespace-pre-line">
            {t("about.bio")}
          </p>
        </div>
      </div>
    </section>
  );
}
