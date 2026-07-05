import { useState } from "react";
import { useTranslation } from "react-i18next";
import { submitContactForm } from "../../lib/api/contact-form";

type Step = { title: string; desc: string };

const WHATSAPP_URL = "https://wa.me/972506096289";
const WHATSAPP_NUMBER = "972506096289";

const MEMO_URLS: Record<string, string> = {
  ru: "/downloads/pamyatka-ru.pdf",
  he: "/downloads/pamyatka-he.pdf",
};

type Status = "idle" | "sending" | "success" | "error" | "required";

export function HowIWork() {
  const { t, i18n } = useTranslation();
  const steps = t("how.steps", { returnObjects: true }) as Step[];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const lang = i18n.language === "he" ? "he" : "ru";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      setStatus("required");
      return;
    }

    setStatus("sending");

    try {
      // 1. Log the lead server-side (best-effort, doesn't block the flow below)
      submitContactForm({ data: { name, phone, message } }).catch(() => {});

      // 2. Trigger automatic download of the memo in the visitor's language
      const memoUrl = MEMO_URLS[lang];
      const link = document.createElement("a");
      link.href = memoUrl;
      link.download = memoUrl.split("/").pop() ?? "pamyatka.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // 3. Open WhatsApp with a pre-filled message — the visitor just taps "send"
      const prefillKey = message.trim()
        ? "how.whatsapp_prefill_with_message"
        : "how.whatsapp_prefill_no_message";
      const prefillText = t(prefillKey, { name, message });
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(prefillText)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="how" className="py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-ink mb-16 text-center">
          {t("how.heading")}
        </h2>
        <div className="grid md:grid-cols-3 gap-12 md:gap-10">
          {steps.map((s, i) => (
            <div key={i} className="text-start">
              <p className="text-xs tracking-[0.3em] text-accent mb-4">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-xl font-light tracking-wide text-ink mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-muted font-light leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div id="booking" className="mt-24 pt-16 border-t border-border">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-ink mb-4 text-center">
              {t("how.booking_heading")}
            </h2>
            <p className="text-base text-muted font-light leading-relaxed mb-10 text-center">
              {t("how.booking_subtitle")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs tracking-widest uppercase text-muted mb-2">
                  {t("how.form_name")}
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border border-border rounded-sm text-ink placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs tracking-widest uppercase text-muted mb-2">
                  {t("how.form_phone")}
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border border-border rounded-sm text-ink placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs tracking-widest uppercase text-muted mb-2">
                  {t("how.form_message")}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border border-border rounded-sm text-ink placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="block w-full bg-accent text-paper py-4 text-sm tracking-[0.18em] uppercase font-normal rounded-sm hover:bg-accent-hover transition-all duration-500 min-h-[44px] text-center disabled:opacity-60"
              >
                {status === "sending" ? t("how.form_sending") : t("how.form_submit")}
              </button>

              {status === "success" && (
                <p className="text-sm text-accent font-light leading-relaxed text-center">
                  {t("how.form_success")}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive font-light leading-relaxed text-center">
                  {t("how.form_error")}
                </p>
              )}
              {status === "required" && (
                <p className="text-sm text-destructive font-light leading-relaxed text-center">
                  {t("how.form_required")}
                </p>
              )}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center text-sm text-muted hover:text-accent transition-colors duration-300 pt-2"
              >
                {t("how.form_whatsapp")}
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
