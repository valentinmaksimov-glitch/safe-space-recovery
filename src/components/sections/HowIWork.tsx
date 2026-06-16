import { useTranslation } from "react-i18next";

type Step = { title: string; desc: string };

export function HowIWork() {
  const { t } = useTranslation();
  const steps = t("how.steps", { returnObjects: true }) as Step[];

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="how" className="py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.4em] uppercase text-muted mb-16 text-center">
          {t("how.heading")}
        </p>
        <div className="grid md:grid-cols-3 gap-12 md:gap-10">
          {steps.map((s, i) => (
            <div key={i} className="text-start">
              <p className="text-xs tracking-[0.3em] text-accent mb-4">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-xl font-light tracking-wide text-ink mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-muted font-light leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-base text-muted font-light leading-relaxed max-w-2xl mx-auto mb-8">
            {t("how.micro_cta")}
          </p>
          <button onClick={scrollToContact} className="btn-quiet">
            {t("how.button")}
          </button>
        </div>
      </div>
    </section>
  );
}
