import { useTranslation } from "react-i18next";

type Item = { date: string; title: string; excerpt: string };

export function BlogPreview() {
  const { t } = useTranslation();
  const items = t("blog.items", { returnObjects: true }) as Item[];

  return (
    <section id="blog" className="py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.4em] uppercase text-muted mb-12 text-center">
          {t("blog.heading")}
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((it) => (
            <article key={it.title} className="group">
              <p className="text-xs tracking-widest uppercase text-muted">
                {it.date}
              </p>
              <h3 className="text-lg font-light tracking-wide text-ink mt-3 leading-snug">
                {it.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mt-3">
                {it.excerpt}
              </p>
              <a
                href="#"
                className="inline-block mt-5 text-xs tracking-widest uppercase text-ink border-b border-ink/40 hover:border-ink pb-0.5 transition-all duration-500"
              >
                {t("blog.readMore")} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
