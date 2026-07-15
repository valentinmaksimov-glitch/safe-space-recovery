import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "@/i18n";
import i18n, { applyDocumentLang, detectStoredLang } from "@/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Triggers } from "@/components/sections/Triggers";
import { About } from "@/components/sections/About";
import { HowIWork } from "@/components/sections/HowIWork";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { AuditCTA } from "@/components/sections/AuditCTA";

const SITE = "https://valentin-maksimov.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Валентин Максимов — специалист по зависимостям и поведенческим паттернам | Израиль",
      },
      {
        name: "description",
        content:
          "Помогаю разорвать замкнутый круг деструктивных привычек. Интегративный подход: CBT, NLP, 12 шагов. Очно в Израиле и онлайн. Полная анонимность, без записей в медкарту, без осуждения.",
      },
      {
        name: "keywords",
        content:
          "зависимости, поведенческие паттерны, консультант по зависимостям, 12 шагов, CBT, NLP, майндфулнес, помощь при зависимости, Израиль, психолог онлайн, יועץ התמכרויות, שינוי דפוסי התנהגות",
      },
      { name: "author", content: "Valentin Maksimov" },
      { property: "og:title", content: "Валентин Максимов — Специалист по зависимостям и поведенческим паттернам" },
      {
        property: "og:description",
        content:
          "Помогаю разорвать замкнутый круг деструктивных привычек. Очно в Израиле и онлайн. Без осуждения.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:locale:alternate", content: "he_IL" },
      { property: "og:site_name", content: "Валентин Максимов" },
      { property: "og:image", content: `${SITE}/og-image.jpg` },
      { property: "og:image:width", content: "600" },
      { property: "og:image:height", content: "600" },
      {
        property: "og:image:alt",
        content: "Валентин Максимов — специалист по работе с зависимостями, Израиль",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Валентин Максимов — Специалист по зависимостям" },
      {
        name: "twitter:description",
        content:
          "Помогаю разорвать замкнутый круг деструктивных привычек. Израиль, очно и онлайн.",
      },
      { name: "twitter:image", content: `${SITE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${SITE}/` },
      { rel: "alternate", hrefLang: "ru", href: `${SITE}/` },
      { rel: "alternate", hrefLang: "he", href: `${SITE}/` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${SITE}/#website`,
              "url": `${SITE}/`,
              "name": "Валентин Максимов",
              "inLanguage": ["ru", "he"],
              "publisher": { "@id": `${SITE}/#person` },
            },
            {
              "@type": "WebPage",
              "@id": `${SITE}/#webpage`,
              "url": `${SITE}/`,
              "name": "Валентин Максимов — Специалист по зависимостям и поведенческим паттернам",
              "isPartOf": { "@id": `${SITE}/#website` },
              "about": { "@id": `${SITE}/#person` },
              "primaryImageOfPage": { "@id": `${SITE}/#primaryimage` },
              "inLanguage": "ru",
            },
            {
              "@type": "ImageObject",
              "@id": `${SITE}/#primaryimage`,
              "url": `${SITE}/valentin.jpg`,
              "contentUrl": `${SITE}/valentin.jpg`,
              "width": 600,
              "height": 600,
              "caption": "Валентин Максимов",
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${SITE}/#breadcrumb`,
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Главная", "item": `${SITE}/` },
              ],
            },
            {
              "@type": "ProfessionalService",
              "@id": `${SITE}/#business`,
              "name": "Валентин Максимов — Консультант по зависимостям",
              "description":
                "Специалист по зависимостям и коррекции поведенческих паттернов. Помощь в разрыве замкнутого круга деструктивных привычек. Интегративный подход: CBT, NLP, 12 шагов.",
              "url": `${SITE}/`,
              "image": `${SITE}/valentin.jpg`,
              "telephone": "+972506096289",
              "priceRange": "$$",
              "areaServed": { "@type": "Country", "name": "Israel" },
              "address": { "@type": "PostalAddress", "addressCountry": "IL" },
              "availableLanguage": ["Russian", "Hebrew"],
              "provider": { "@id": `${SITE}/#person` },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+972506096289",
                  "contactType": "customer service",
                  "availableLanguage": ["Russian", "Hebrew"],
                  "areaServed": "IL",
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE}/#faq`,
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Это похоже на психотерапию?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Я не ставлю диагнозов. Моя работа практическая: мы анализируем поведенческие сценарии и создаём план изменений.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Сколько сессий нужно?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Первые изменения заметны через 4–6 встреч. Устойчивый результат требует 3–6 месяцев работы.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Вы работаете с зависимостями?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Работаю с зависимым поведением, эмоциональной зависимостью, гиперконтролем и деструктивными паттернами.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Как проходят встречи?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Очно в Израиле или онлайн. Формат онлайн не уступает очному по эффективности.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Что происходит на первой встрече?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Это спокойная беседа, чтобы познакомиться, прояснить ситуацию и понять, комфортно ли нам работать вместе. Никакого давления — только честная оценка того, чем я могу быть Вам полезен.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { i18n: i18nHook } = useTranslation();

  // Upgrade to the visitor's stored language only after mount to avoid
  // hydration mismatches with the deterministic SSR default ("ru").
  useEffect(() => {
    const stored = detectStoredLang();
    if (stored !== i18n.language) {
      void i18n.changeLanguage(stored);
    } else {
      applyDocumentLang(stored);
    }
  }, []);

  useEffect(() => {
    applyDocumentLang(i18nHook.resolvedLanguage ?? i18nHook.language ?? "ru");
  }, [i18nHook.resolvedLanguage, i18nHook.language]);

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
