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
import { Services } from "@/components/sections/Services";
import { FAQ } from "@/components/sections/FAQ";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Валентин Максимов — Консультант по зависимостям | Израиль" },
      {
        name: "description",
        content:
          "Частная практика по работе с зависимостями, созависимостью и профилем ВДА. Израиль. Онлайн и очно. Русский, иврит, английский.",
      },
      {
        property: "og:title",
        content: "Валентин Максимов — Консультант по зависимостям | Израиль",
      },
      {
        property: "og:description",
        content:
          "Интеграция 12-шаговой методологии и доказательной практики (TIP 35, Нати Ронель). Конфиденциально. Ru · He · En.",
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
        <Services />
        <FAQ />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
