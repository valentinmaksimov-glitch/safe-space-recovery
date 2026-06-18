import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "@/i18n";
import { applyDocumentLang } from "@/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Triggers } from "@/components/sections/Triggers";
import { About } from "@/components/sections/About";
import { HowIWork } from "@/components/sections/HowIWork";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { AuditCTA } from "@/components/sections/AuditCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Валентин Максимов — Консультант | Израиль" },
      {
        name: "description",
        content:
          "Частная практика: работа с зависимым поведением, гиперконтролем и повторяющимися кризисами. Очно в Израиле и онлайн. Русский, иврит, английский.",
      },
      { property: "og:title", content: "Валентин Максимов — Консультант" },
      {
        property: "og:description",
        content:
          "Выход из замкнутого круга. Диагностика, восстановление опор, устойчивые изменения.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  const { i18n } = useTranslation();

  useEffect(() => {
    applyDocumentLang(i18n.resolvedLanguage ?? i18n.language ?? "ru");
  }, [i18n.resolvedLanguage, i18n.language]);

  return (
    <div className="bg-paper text-ink min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Triggers />
        <AuditCTA />
        <About />
        <HowIWork />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
