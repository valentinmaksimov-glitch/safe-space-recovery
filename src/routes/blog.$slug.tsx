import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import "@/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useAppLanguage } from "@/hooks/use-app-language";
import { articleBySlug } from "@/lib/blog-data";

const SITE = "https://valentin-maksimov.com";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = articleBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Статья не найдена | Валентин Максимов" }, { name: "robots", content: "noindex" }],
      };
    }
    const a = loaderData.article;
    return {
      meta: [
        { title: `${a.title} | Валентин Максимов` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${SITE}/blog/${params.slug}` },
        { property: "og:image", content: `${SITE}/og-image.jpg` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: `${SITE}/og-image.jpg` },
      ],
      links: [{ rel: "canonical", href: `${SITE}/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.excerpt,
            datePublished: a.date,
            inLanguage: a.lang,
            author: { "@type": "Person", name: "Валентин Максимов" },
            mainEntityOfPage: `${SITE}/blog/${params.slug}`,
          }),
        },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const { t } = useTranslation();
  const { isHebrew } = useAppLanguage();

  return (
    <div className="bg-paper text-ink min-h-screen" dir={article.lang === "he" ? "rtl" : "ltr"}>
      <Navbar />
      <main className="pt-32 pb-20 px-5 sm:px-6">
        <article className="mx-auto max-w-2xl">
          <time className="text-[11px] tracking-widest uppercase text-muted" dateTime={article.date}>
            {article.date}
          </time>
          <h1 className="mt-4 text-3xl md:text-4xl font-light tracking-wide text-ink leading-tight">
            {article.title}
          </h1>
          <div className="mt-10 space-y-6 text-muted text-base leading-relaxed">
            {article.body.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Link
            to="/blog"
            className="link-underline mt-12 inline-flex items-center min-h-[44px] text-xs tracking-widest uppercase text-ink hover:text-accent transition-colors duration-300"
          >
            {isHebrew ? "← כל המאמרים" : "← Все статьи"}
            <span className="sr-only">{t("blog.heading")}</span>
          </Link>
        </article>
      </main>
      <Footer />
    </div>
  );
}
