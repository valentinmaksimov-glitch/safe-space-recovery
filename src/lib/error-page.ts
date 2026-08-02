type Lang = "ru" | "he";

const COPY: Record<Lang, { title: string; body: string; retry: string; home: string; dir: string }> = {
  ru: {
    title: "Страница не загрузилась",
    body: "Что-то пошло не так с нашей стороны. Попробуйте обновить страницу или вернуться на главную.",
    retry: "Попробовать снова",
    home: "На главную",
    dir: "ltr",
  },
  he: {
    title: "הדף לא נטען",
    body: "משהו השתבש אצלנו. אפשר לנסות לרענן את הדף או לחזור לעמוד הבית.",
    retry: "לנסות שוב",
    home: "לעמוד הבית",
    dir: "rtl",
  },
};

export function renderErrorPage(lang?: string): string {
  const key: Lang = lang === "he" ? "he" : "ru";
  const c = COPY[key];

  return `<!doctype html>
<html lang="${key}" dir="${c.dir}">
  <head>
    <meta charset="utf-8" />
    <title>${c.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.6 system-ui, -apple-system, sans-serif; background: #F5F4F0; color: #1A1D20; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; font-weight: 400; margin: 0 0 0.5rem; }
      p { color: #6B7280; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.75rem 1.25rem; min-height: 44px; border-radius: 0.25rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #1E3A5F; color: #F5F4F0; }
      .secondary { background: transparent; color: #1A1D20; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>${c.title}</h1>
      <p>${c.body}</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">${c.retry}</button>
        <a class="secondary" href="/">${c.home}</a>
      </div>
    </div>
  </body>
</html>`;
}
