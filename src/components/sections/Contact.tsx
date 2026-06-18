import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const existing = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    if (existing) {
      // @ts-expect-error Tally global
      if (typeof window.Tally !== "undefined") window.Tally.loadEmbeds();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => {
      // @ts-expect-error Tally global
      if (typeof window.Tally !== "undefined") window.Tally.loadEmbeds();
    };
    document.body.appendChild(script);
    scriptRef.current = script;

    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-light tracking-wide text-ink text-center">
          {t("contact.heading")}
        </h2>
        <p className="text-base text-muted font-light leading-relaxed text-center mt-6 mb-12">
          {t("contact.subtitle")}
        </p>

        <div className="w-full">
          <iframe
            data-tally-src="https://tally.so/embed/eqoJEx?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="1117"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Аудит повторяющихся сценариев"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

