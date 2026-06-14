import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "@/i18n";
import { applyDocumentLang } from "@/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Methodology } from "@/components/sections/Methodology";
import { FAQ } from "@/components/sections/FAQ";
import { ScreeningForm } from "@/components/sections/ScreeningForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Валентин Максимов — Консультант. Практика 12 шагов | Израиль" },
      {
        name: "description",
        content:
          "Частная практика для взрослых: работа с выгоранием, гиперконтролем и созависимостью на основе принципов 12-шаговой программы. Израиль. Русский, иврит.",
      },
      { property: "og:title", content: "Валентин Максимов — Консультант" },
      {
        property: "og:description",
        content:
          "Когда контроль больше не спасает. Помогаю разобрать механизм и вернуть настоящую опору на себя.",
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
        <About />
        <Methodology />
        <FAQ />
        <ScreeningForm />
      </main>
      <Footer />
    </div>
  );
}
