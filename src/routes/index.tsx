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
      { title: "Валентин Максимов — специалист по работе с зависимостями | Израиль" },
      {
        name: "description",
        content:
          "Специалист по работе с химическими и поведенческими зависимостями. Работаю в Израиле — очно и онлайн, на русском и иврите. Без осуждения.",
      },
      {
        property: "og:title",
        content: "Валентин Максимов — специалист по работе с зависимостями",
      },
      {
        property: "og:description",
        content:
          "Работаю в Израиле с химическими и поведенческими зависимостями. Очно и онлайн, без осуждения.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://valentin-maksimov.com" },
      { property: "og:locale", content: "ru_IL" },
      { property: "og:image", content: "https://valentin-maksimov.com/valentin.jpg" },
      { property: "og:image:width", content: "600" },
      { property: "og:image:height", content: "600" },
      {
        property: "og:image:alt",
        content: "Валентин Максимов — специалист по работе с зависимостями, Израиль",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Валентин Максимов — специалист по работе с зависимостями | Израиль" },
      {
        name: "twitter:description",
        content:
          "Специалист по работе с химическими и поведенческими зависимостями. Израиль, очно и онлайн.",
      },
      { name: "twitter:image", content: "https://valentin-maksimov.com/valentin.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://valentin-maksimov.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Это похоже на психотерапию?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Я не ставлю диагнозов. Моя работа практическая: мы анализируем поведенческие сценарии и создаём план изменений.",
              },
            },
            {
              "@type": "Question",
              "name": "Сколько сессий нужно?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Первые изменения заметны через 4–6 встреч. Устойчивый результат требует 3–6 месяцев работы.",
              },
            },
            {
              "@type": "Question",
              "name": "Вы работаете с зависимостями?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Работаю с зависимым поведением, эмоциональной зависимостью, гиперконтролем и деструктивными паттернами.",
              },
            },
            {
              "@type": "Question",
              "name": "Как проходят встречи?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Очно в Израиле или онлайн. Формат онлайн не уступает очному по эффективности.",
              },
            },
            {
              "@type": "Question",
              "name": "Первая встреча?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Это спокойная беседа, чтобы познакомиться, прояснить ситуацию и понять, комфортно ли нам работать вместе. Никакого давления — только честная оценка того, чем я могу быть вам полезен.",
              },
            },
          ],
        }),
      },
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
