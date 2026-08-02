import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import "@/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useAppLanguage } from "@/hooks/use-app-language";
import { articlesFor } from "@/lib/blog-data";

const SITE = "https://valentin-maksimov.com";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Статьи | Валентин Максимов" },
      {
        name: "description",
        content:
          "Статьи о повторяющихся сценариях, зависимом поведении и возвращении уверенности. Материалы на русском и иврите.",
      },
      { property: "og:title", content: "Статьи | Валентин Максимов" },
      {
        property: "og:description",
        content: "Материалы о деструктивных паттернах поведения и работе с ними.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/blog` },
      { property: "og:image", content: `${SITE}/og-image.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/blog` }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const { t } = useTranslation();
  const { lang, isHebrew } = useAppLanguage();
  const articles = articlesFor(lang);

  return (
    <div className="bg-paper text-ink min-h-screen" dir={isHebrew ? "rtl" : "ltr"}>
      <Navbar />
      <main className="pt-32 pb-20 px-5 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-light tracking-wide text-ink">
            {t("blog.heading")}
          </h1>
          <p className="mt-4 text-muted text-sm leading-relaxed max-w-2xl">
            {t("blog.subheading")}
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a) => (
              <article
                key={a.slug}
                className="flex flex-col border border-border bg-paper transition-colors duration-300 hover:border-accent"
              >
                <div
                  className="aspect-[16/10] w-full bg-accent/10 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="text-xs tracking-[0.35em] uppercase text-accent/60">
                    VM
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <time className="text-[11px] tracking-widest uppercase text-muted" dateTime={a.date}>
                    {a.date}
                  </time>
                  <h2 className="mt-3 text-lg font-light leading-snug text-ink">
                    {a.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted leading-relaxed flex-1">
                    {a.excerpt}
                  </p>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: a.slug }}
                    className="link-underline mt-6 inline-flex self-start text-xs tracking-widest uppercase text-ink hover:text-accent transition-colors duration-300 min-h-[44px] items-center"
                  >
                    {t("blog.readMore")}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
