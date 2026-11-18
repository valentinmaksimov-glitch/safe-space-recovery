import { useEffect, useRef, useState } from "react";
import ru from "@/i18n/locales/ru.json";
import he from "@/i18n/locales/he.json";
import { trackToSheet } from "@/lib/track";

type Lang = "ru" | "he";
const TEXTS = { ru: ru.closeOnes, he: he.closeOnes };
const WHATSAPP_URL = "https://wa.me/972506096289";
const TELEGRAM_URL = "https://t.me/V_m_help";
const FOCUS = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}
function TelegramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

const BTN_BASE =
  "cta-lift inline-flex items-center justify-center gap-3 w-full sm:w-auto min-h-[48px] px-8 py-4 rounded-md text-sm font-semibold tracking-[0.15em] uppercase transition-colors " +
  FOCUS;

function Buttons({ lang, idSuffix, inverted }: { lang: Lang; idSuffix: string; inverted?: boolean }) {
  const t = TEXTS[lang];
  const wa = `${WHATSAPP_URL}?text=${encodeURIComponent(t.whatsappMessage)}`;
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        id={`whatsapp-cta-${idSuffix}`}
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className={BTN_BASE + (inverted ? " bg-paper text-ink hover:bg-surface" : " bg-accent text-paper hover:bg-accent-hover")}
      >
        <WhatsAppIcon />
        {t.whatsapp}
      </a>
      <a
        id={`telegram-cta-${idSuffix}`}
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackToSheet({ sheet: "TG", lang })}
        className={
          BTN_BASE +
          " bg-transparent border " +
          (inverted ? "border-paper/60 text-paper hover:border-paper" : "text-ink border-border hover:border-ink")
        }
      >
        <TelegramIcon />
        {t.telegram}
      </a>
    </div>
  );
}

export function CloseOnesPage({ lang }: { lang: Lang }) {
  const t = TEXTS[lang];
  const heroBtns = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const el = heroBtns.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setShowSticky(!e.isIntersecting && e.boundingClientRect.top < 0));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const container = "mx-auto max-w-3xl px-5 sm:px-8";
  const section = "py-14 md:py-20";
  const h2 = "text-2xl md:text-3xl font-semibold text-ink";
  const card = "bg-paper border border-border rounded-xl p-5";
  const langLink = (code: Lang, label: string, href: string) => (
    <a
      href={href}
      hrefLang={code}
      aria-current={lang === code ? "page" : undefined}
      className={"inline-flex items-center min-h-[48px] px-1 transition-all duration-500 " + FOCUS + (lang === code ? " text-ink" : " text-muted hover:text-ink")}
    >
      {label}
    </a>
  );

  return (
    <div dir={lang === "he" ? "rtl" : "ltr"} lang={lang} className="bg-paper text-ink font-sans min-h-screen pb-24 md:pb-0">
      <header className="h-16 border-b border-border">
        <div className={container + " h-full flex items-center justify-between"}>
          <span className="text-base font-semibold text-ink">{t.brand}</span>
          <div className="flex items-center gap-3 text-xs tracking-widest">
            {langLink("ru", "РУ", "/close-ones")}
            <span className="text-border select-none" aria-hidden="true">|</span>
            {langLink("he", "עב", "/he/close-ones")}
          </div>
        </div>
      </header>

      <main>
        <section className="bg-paper pt-10 md:pt-16 pb-14 md:pb-20">
          <div className={container}>
            <p className="text-xs sm:text-sm tracking-[0.15em] uppercase text-muted font-semibold">{t.eyebrow}</p>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.18] text-ink">{t.h1}</h1>
            <p className="mt-6 text-base sm:text-lg text-ink/80 leading-relaxed">{t.subhead}</p>
            <div ref={heroBtns} className="mt-8">
              <Buttons lang={lang} idSuffix="top" />
            </div>
          </div>
        </section>

        <section className={"bg-surface " + section}>
          <div className={container}>
            <h2 className={h2}>{t.quotesHeading}</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.quotes.map((q, i) => (
                <p key={i} className={card + " border-s-4 border-s-accent text-base sm:text-lg text-ink"}>{q}</p>
              ))}
            </div>
          </div>
        </section>

        <section className={"bg-paper " + section}>
          <div className={container}>
            <h2 className={h2}>{t.benefitsHeading}</h2>
            <ul className="mt-8 space-y-4">
              {t.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-base sm:text-lg text-ink/80 leading-relaxed">
                  <span className="mt-[0.6em] shrink-0 w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg sm:text-xl font-medium text-ink leading-relaxed">{t.closing}</p>
          </div>
        </section>

        <section className={"bg-surface " + section}>
          <div className={container}>
            <h2 className={h2}>{t.faqHeading}</h2>
            <div className="mt-8 space-y-4">
              {t.faq.map((f, i) => (
                <div key={i} className={card}>
                  <h3 className="text-lg font-semibold text-ink">{f.q}</h3>
                  <p className="mt-2 text-base sm:text-lg text-ink/80 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-accent text-paper py-14">
          <div className={container}>
            <h2 className="text-2xl md:text-3xl font-semibold text-paper">{t.meetingHeading}</h2>
            <p className="mt-4 text-base sm:text-lg text-paper/90 leading-relaxed">{t.meetingLine}</p>
            <div className="mt-8">
              <Buttons lang={lang} idSuffix="meeting" inverted />
            </div>
          </div>
        </section>

        <section className={"bg-paper " + section}>
          <div className={container}>
            <h2 className={h2}>{t.aboutHeading}</h2>
            <div className="mt-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <img
                src="/valentin.jpg"
                alt={t.brand}
                width={600}
                height={750}
                loading="lazy"
                decoding="async"
                className="w-full max-w-xs md:w-56 shrink-0 rounded-xl aspect-[4/5] object-cover"
              />
              <div>
                <p className="text-xl font-semibold text-ink">{t.aboutName}</p>
                <p className="mt-3 text-base sm:text-lg text-ink/80 leading-relaxed">{t.aboutText}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-sm text-muted text-center">
        <div className={container}>
          <p>{t.disclaimer}</p>
          <a href="/privacy" className={"mt-2 inline-flex items-center min-h-[48px] underline hover:text-ink " + FOCUS}>{t.privacy}</a>
        </div>
      </footer>

      <div
        className={
          "md:hidden fixed bottom-0 inset-x-0 z-40 bg-paper/95 backdrop-blur border-t border-border p-3 flex gap-3 transition-transform " +
          (showSticky ? "translate-y-0" : "translate-y-full pointer-events-none")
        }
        aria-hidden={!showSticky}
      >
        <a
          id="whatsapp-cta-sticky"
          href={`${WHATSAPP_URL}?text=${encodeURIComponent(t.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={showSticky ? 0 : -1}
          className={"w-1/2 inline-flex items-center justify-center gap-2 min-h-[48px] rounded-md bg-accent text-paper hover:bg-accent-hover text-sm font-semibold " + FOCUS}
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
        <a
          id="telegram-cta-sticky"
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={showSticky ? 0 : -1}
          onClick={() => trackToSheet({ sheet: "TG", lang })}
          className={"w-1/2 inline-flex items-center justify-center gap-2 min-h-[48px] rounded-md border border-border text-ink hover:border-ink text-sm font-semibold " + FOCUS}
        >
          <TelegramIcon />
          Telegram
        </a>
      </div>
    </div>
  );
}
