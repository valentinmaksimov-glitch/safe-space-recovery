import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type QA = { q: string; a: string };

export function FAQ() {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true }) as QA[];

  return (
    <section id="faq" className="py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs tracking-[0.4em] uppercase text-muted mb-12 text-center">
          {t("faq.heading")}
        </p>
        <Accordion type="single" collapsible className="w-full">
          {items.map((it, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="text-start text-base font-light tracking-wide text-ink py-6 hover:no-underline">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted leading-relaxed pb-6">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
