import { useTranslation } from "react-i18next";

const PHONE_NUMBER = "050-6096289";
const WHATSAPP_URL = "https://wa.me/972506096289";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-light tracking-wide text-ink">
          {t("contact.heading")}
        </h2>

        <div className="mt-10 flex flex-col items-center gap-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-ink hover:text-accent transition-colors duration-300"
          >
            {PHONE_NUMBER}
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent text-paper px-8 py-4 text-sm tracking-[0.18em] uppercase font-normal rounded-sm hover:bg-accent-hover transition-all duration-500 min-h-[44px] w-full max-w-xs"
          >
            {t("contact.whatsapp_button")}
          </a>
        </div>
      </div>
    </section>
  );
}
