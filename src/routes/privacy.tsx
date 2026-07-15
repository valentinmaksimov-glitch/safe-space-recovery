import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Политика конфиденциальности | Валентин Максимов" },
      {
        name: "description",
        content: "Политика обработки персональных данных на сайте консультанта Валентина Максимова.",
      },
    ],
    links: [{ rel: "canonical", href: "https://valentin-maksimov.com/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { i18n } = useTranslation();
  const isHebrew = i18n.resolvedLanguage === "he" || i18n.language === "he";

  return (
    <div className="bg-paper text-ink min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div
            role="heading"
            aria-level={1}
            className="text-3xl md:text-4xl font-light tracking-wide text-ink mb-12"
          >
            {isHebrew ? "מדיניות פרטיות" : "Политика конфиденциальности"}
          </div>

          <div className="text-muted text-sm leading-relaxed space-y-6">
            <p>
              {isHebrew
                ? "עודכן: יוני 2026"
                : "Обновлено: июнь 2026"}
            </p>

            <section>
              <h2 className="text-ink text-lg font-light mb-4">
                {isHebrew ? "1. אילו מידע אנו אוספים" : "1. Какую информацию мы собираем"}
              </h2>
              <p>
                {isHebrew
                  ? "אנו אוספים רק את המידע שאתם מספקים באופן וולונטרי דרך טפסי יצירת קשר באתר, כולל: שם, דרכי יצירת קשר (WhatsApp, Telegram, דוא\"ל), ותוכן ההודעה שלכם."
                  : "Мы собираем только ту информацию, которую вы предоставляете добровольно через формы обратной связи на сайте, включая: имя, способы связи (WhatsApp, Telegram, электронная почта) и содержание вашего сообщения."}
              </p>
            </section>

            <section>
              <h2 className="text-ink text-lg font-light mb-4">
                {isHebrew ? "2. כיצד אנו משתמשים במידע" : "2. Как мы используем информацию"}
              </h2>
              <p>
                {isHebrew
                  ? "המידע משמש אך ורק ליצירת קשר עמכם בנוגע לשירותי הייעוץ. אנו לא מוכרים, משתפים או מעבירים את המידע שלכם לצדדים שלישיים."
                  : "Информация используется исключительно для связи с вами по вопросам консультационных услуг. Мы не продаем, не передаем и не раскрываем вашу информацию третьим лицам."}
              </p>
            </section>

            <section>
              <h2 className="text-ink text-lg font-light mb-4">
                {isHebrew ? "3. אבטחת מידע" : "3. Защита данных"}
              </h2>
              <p>
                {isHebrew
                  ? "אנו נוקטים אמצעי אבטחה סבירים להגנה על המידע האישי שלכם מפני גישה לא מורשית, שינוי או השמדה."
                  : "Мы принимаем разумные меры безопасности для защиты вашей личной информации от несанкционированного доступа, изменения или уничтожения."}
              </p>
            </section>

            <section>
              <h2 className="text-ink text-lg font-light mb-4">
                {isHebrew ? "4. הזכויות שלכם" : "4. Ваши права"}
              </h2>
              <p>
                {isHebrew
                  ? "יש לכם את הזכות לבקש גישה למידע האישי שלכם, לתקן אותו או למחוק אותו. לבקשות, אנא פנו אלינו דרך ערוצי הקשר באתר."
                  : "Вы имеете право запросить доступ к вашей личной информации, исправить или удалить её. Для запросов обращайтесь через каналы связи на сайте."}
              </p>
            </section>

            <section>
              <h2 className="text-ink text-lg font-light mb-4">
                {isHebrew ? "5. קובצי עוגיות (Cookies)" : "5. Файлы cookie"}
              </h2>
              <p>
                {isHebrew
                  ? "האתר עשוי להשתמש בעוגיות לצורך שיפור חוויית המשתמש. ניתן להשבית עוגיות בהגדרות הדפדפן שלכם."
                  : "Сайт может использовать файлы cookie для улучшения пользовательского опыта. Вы можете отключить cookie в настройках вашего браузера."}
              </p>
            </section>

            <section>
              <h2 className="text-ink text-lg font-light mb-4">
                {isHebrew ? "6. יצירת קשר" : "6. Контакты"}
              </h2>
              <p>
                {isHebrew
                  ? "לשאלות בנוגע למדיניות פרטיות זו, ניתן ליצור איתנו קשר דרך עמוד הקשר באתר."
                  : "По вопросам regarding этой политики конфиденциальности обращайтесь через страницу контактов на сайте."}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
