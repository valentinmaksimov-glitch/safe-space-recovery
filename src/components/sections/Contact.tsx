import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (name.trim().length < 2) errs.name = t("contact.validation_required");
    if (contact.trim().length < 3) errs.contact = t("contact.validation_required");
    if (message.trim().length < 3) errs.message = t("contact.validation_required");
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setDone(true);
  };

  if (done) {
    return (
      <section id="contact" className="py-28 px-6 border-t border-border">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-ink">
            {t("contact.success_title")}
          </h2>
          <span className="block w-16 h-px bg-muted my-10 mx-auto" />
          <p className="text-base text-muted font-light leading-relaxed">
            {t("contact.success_body")}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-xl">
        <h2 className="text-3xl md:text-4xl font-light tracking-wide text-ink text-center">
          {t("contact.heading")}
        </h2>
        <p className="text-base text-muted font-light leading-relaxed text-center mt-6 mb-12">
          {t("contact.subtitle")}
        </p>

        <form onSubmit={submit} noValidate className="flex flex-col gap-6">
          <div>
            <label className="block text-xs tracking-widest uppercase text-muted mb-2 text-start">
              {t("contact.name_label")}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              className="w-full px-4 py-3 bg-transparent border border-border focus:border-accent outline-none text-ink transition-all duration-500"
            />
            {errors.name && (
              <p className="text-xs text-destructive mt-2 text-start">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-xs tracking-widest uppercase text-muted mb-2 text-start">
              {t("contact.contact_label")}
            </label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              maxLength={150}
              className="w-full px-4 py-3 bg-transparent border border-border focus:border-accent outline-none text-ink transition-all duration-500"
            />
            {errors.contact && (
              <p className="text-xs text-destructive mt-2 text-start">{errors.contact}</p>
            )}
          </div>

          <div>
            <label className="block text-xs tracking-widest uppercase text-muted mb-2 text-start">
              {t("contact.message_label")}
            </label>
            <textarea
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={2000}
              placeholder={t("contact.message_placeholder")}
              className="w-full px-4 py-4 bg-transparent border border-border focus:border-accent outline-none text-ink font-light leading-relaxed resize-none transition-all duration-500"
            />
            {errors.message && (
              <p className="text-xs text-destructive mt-2 text-start">{errors.message}</p>
            )}
          </div>

          <div className="mt-4 flex justify-center">
            <button type="submit" disabled={submitting} className="btn-quiet disabled:opacity-60">
              {submitting ? t("contact.sending") : t("contact.submit")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
