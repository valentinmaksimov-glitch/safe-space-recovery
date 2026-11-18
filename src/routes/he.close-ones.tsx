import { createFileRoute } from "@tanstack/react-router";
import { CloseOnesPage } from "@/components/sections/CloseOnesPage";
import texts from "@/i18n/locales/he.json";

const URL = "https://www.valentinm.co.il/he/close-ones";
const t = texts.closeOnes;

export const Route = createFileRoute("/he/close-ones")({
  head: () => ({
    meta: [
      { title: t.title },
      { name: "description", content: t.description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: t.title },
      { property: "og:description", content: t.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "he_IL" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: URL },
      { rel: "alternate", hrefLang: "ru", href: "https://www.valentinm.co.il/close-ones" },
      { rel: "alternate", hrefLang: "he", href: "https://www.valentinm.co.il/he/close-ones" },
      { rel: "alternate", hrefLang: "x-default", href: "https://www.valentinm.co.il/close-ones" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "ולנטין מקסימוב",
          url: URL,
          telephone: "+972506096289",
          areaServed: ["Israel", "Petah Tikva", "Ramat Gan"],
          availableLanguage: ["Russian", "Hebrew"],
        }),
      },
    ],
  }),
  component: () => <CloseOnesPage lang="he" />,
});
