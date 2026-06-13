import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const SECTIONS = [
  { id: "about", key: "nav.about" },
  { id: "methodology", key: "nav.methodology" },
  { id: "services", key: "nav.services" },
  { id: "faq", key: "nav.faq" },
  { id: "blog", key: "nav.blog" },
  { id: "contact", key: "nav.contact" },
] as const;

export function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="text-ink text-sm font-light tracking-[0.4em]"
          aria-label="Valentin Maksimov"
        >
          VM
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors duration-500"
            >
              {t(s.key)}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink p-2"
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className="block w-5 h-px bg-ink mb-1.5" />
          <span className="block w-5 h-px bg-ink mb-1.5" />
          <span className="block w-5 h-px bg-ink" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-paper">
          <nav className="px-6 py-8 flex flex-col gap-6">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-start text-sm tracking-widest uppercase text-muted hover:text-ink transition-colors duration-500"
              >
                {t(s.key)}
              </button>
            ))}
            <div className="pt-4 border-t border-border">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
