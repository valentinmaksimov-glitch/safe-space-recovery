import { useState } from "react";
import { useTranslation } from "react-i18next";

type Item = { q: string; a: string };

export function FAQ() {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true }) as Item[];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs tracking-[0.4em] uppercase text-muted mb-12 text-center">
          {t("faq.heading")}
        </p>
        <div className="divide-y divide-border border-y border-border">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full py-6 flex items-center justify-between gap-6 text-start"
                  aria-expanded={isOpen}
                >
                  <span className="text-ink font-normal text-base">{it.q}</span>
                  <span
                    className={
                      "text-muted text-xl transition-transform duration-500 " +
                      (isOpen ? "rotate-45" : "")
                    }
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={
                    "overflow-hidden transition-all duration-500 " +
                    (isOpen ? "max-h-96 pb-6" : "max-h-0")
                  }
                >
                  <p className="text-sm text-muted leading-relaxed">{it.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
