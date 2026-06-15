import { useState } from "react";
import { useTranslation } from "react-i18next";

type FocusArea = "opt1" | "opt2" | "opt3" | "opt4";

export function ScreeningForm() {
  const { t } = useTranslation();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [focus, setFocus] = useState<FocusArea | "">("");
  const [situation, setSituation] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const totalSteps = 3;

  const validateStep = (): boolean => {
    const e: Record<string, string> = {};
    if (step === 1 && !focus) e.focus = t("form.validation_required");
    if (step === 2 && situation.trim().length < 3) e.situation = t("form.validation_required");
    if (step === 3) {
      if (name.trim().length < 2) e.name = t("form.validation_required");
      if (phone.trim().length < 5) e.phone = t("form.validation_required");
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep((s) => (s < 3 ? ((s + 1) as 2 | 3) : s));
  };

  const back = () => setStep((s) => (s > 1 ? ((s - 1) as 1 | 2) : s));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setDone(true);
  };

  if (done) {
    return (
      <section id="contact" className="py-28 px-6 border-t border-border">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-muted mb-6">
            {t("nav.contact")}
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-ink">
            {t("form.success_title")}
          </h2>
          <span className="block w-16 h-px bg-muted my-10 mx-auto" />
          <p className="text-base text-muted font-light leading-relaxed">
            {t("form.success_body")}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-xl">
        <p className="text-xs tracking-[0.4em] uppercase text-muted mb-6 text-center">
          {t("nav.contact")}
        </p>
        <p className="text-xs tracking-widest uppercase text-muted text-center mb-12">
          {t("form.step_label")} {step} {t("form.of")} {totalSteps}
        </p>

        <form onSubmit={submit} noValidate>
          {step === 1 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-ink mb-10 text-center">
                {t("form.step1_title")}
              </h2>
              <div className="flex flex-col gap-3">
                {(["opt1", "opt2", "opt3", "opt4"] as FocusArea[]).map((opt) => (
                  <label
                    key={opt}
                    className={
                      "flex items-center gap-4 ps-6 pe-6 py-5 border cursor-pointer transition-all duration-500 " +
                      (focus === opt
                        ? "border-accent bg-paper text-ink"
                        : "border-border text-muted hover:border-ink hover:text-ink")
                    }
                  >
                    <input
                      type="radio"
                      name="focus"
                      value={opt}
                      checked={focus === opt}
                      onChange={() => setFocus(opt)}
                      className="accent-accent"
                    />
                    <span className="text-sm tracking-wide">{t(`form.${opt}`)}</span>
                  </label>
                ))}
              </div>
              {errors.focus && (
                <p className="text-xs text-destructive mt-3 text-start">{errors.focus}</p>
              )}
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-ink mb-10 text-center">
                {t("form.step2_title")}
              </h2>
              <textarea
                rows={6}
                value={situation}
                onChange={(e) => setSituation(e.target.value)}
                placeholder={t("form.step2_placeholder")}
                className="w-full ps-4 pe-4 py-4 bg-transparent border border-border focus:border-accent outline-none text-ink text-base font-light leading-relaxed resize-none transition-all duration-500"
              />
              {errors.situation && (
                <p className="text-xs text-destructive mt-3 text-start">{errors.situation}</p>
              )}
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-ink mb-10 text-center">
                {t("form.step3_title")}
              </h2>
              <div className="flex flex-col gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted mb-2 text-start">
                    {t("form.name_label")}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full ps-4 pe-4 py-3 bg-transparent border border-border focus:border-accent outline-none text-ink transition-all duration-500"
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive mt-2 text-start">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted mb-2 text-start">
                    {t("form.phone_label")}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    dir="ltr"
                    className="w-full ps-4 pe-4 py-3 bg-transparent border border-border focus:border-accent outline-none text-ink transition-all duration-500"
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive mt-2 text-start">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="mt-12 flex items-center justify-between gap-4">
            {step > 1 ? (
              <button
                type="button"
                onClick={back}
                className="text-xs tracking-widest uppercase text-muted hover:text-ink transition-all duration-500"
              >
                {t("form.back")}
              </button>
            ) : (
              <span />
            )}

            {step < 3 ? (
              <button type="button" onClick={next} className="btn-quiet">
                {t("form.next")}
              </button>
            ) : (
              <button type="submit" disabled={submitting} className="btn-quiet disabled:opacity-60">
                {submitting ? t("form.sending") : t("form.submit")}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
