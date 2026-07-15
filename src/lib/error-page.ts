const COPY = {
  ru: {
    dir: "ltr",
    lang: "ru",
    title: "Страница не загрузилась | Валентин Максимов",
    heading: "Страница не загрузилась",
    body: "Что-то пошло не так. Попробуйте обновить страницу или вернитесь на главную.",
    retry: "Попробовать снова",
    home: "На главную",
  },
  he: {
    dir: "rtl",
    lang: "he",
    title: "הדף לא נטען | ולנטין מקסימוב",
    heading: "הדף לא נטען",
    body: "משהו השתבש. אפשר לרענן את הדף או לחזור לעמוד הבית.",
    retry: "לנסות שוב",
    home: "לעמוד הבית",
  },
} as const;

export function renderErrorPage(lang: string = "ru"): string {
  const c = lang === "he" ? COPY.he : COPY.ru;
  return `<!doctype html>
<html lang="${c.lang}" dir="${c.dir}">
  <head>
    <meta charset="utf-8" />
    <title>${c.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <style>
      body { font: 15px/1.6 system-ui, -apple-system, "Segoe UI", "Noto Sans Hebrew", sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; font-weight: 500; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.6rem 1.1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; transition: transform .2s ease, background .2s ease; }
      a:hover, button:hover { transform: translateY(-1px); }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>${c.heading}</h1>
      <p>${c.body}</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">${c.retry}</button>
        <a class="secondary" href="/">${c.home}</a>
      </div>
    </div>
  </body>
</html>`;
}
