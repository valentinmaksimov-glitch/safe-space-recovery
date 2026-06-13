import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-paper px-6 pt-24"
    >
      <div className="max-w-3xl text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-muted mb-8">
          {t("about.role")}
        </p>
        <h1 className="text-4xl md:text-6xl font-light tracking-wide text-ink leading-tight">
          {t("hero.title")}
        </h1>
        <p className="text-base md:text-lg text-muted font-light leading-relaxed max-w-xl mx-auto mt-8">
          {t("hero.subtitle")}
        </p>
        <span className="hairline my-10" />
        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="btn-quiet"
        >
          {t("hero.cta")}
        </button>
      </div>
    </section>
  );
}
