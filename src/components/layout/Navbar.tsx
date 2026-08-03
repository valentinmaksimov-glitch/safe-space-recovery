import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useRouterState } from "@tanstack/react-router";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const SECTIONS = [
  { id: "about", key: "nav.about" },
  { id: "how", key: "nav.how" },
  { id: "contact", key: "nav.contact" },
] as const;

export function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  // On the home page: smooth-scroll in place.
  // On /blog or /blog/$slug: let the Link navigate home, then scroll to the hash.
  const handleSectionClick = (e: React.MouseEvent, id: string) => {
    if (!onHome) {
      setOpen(false);
      return;
    }
    e.preventDefault();
    scrollTo(id);
  };

  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 " +
        (scrolled
          ? "bg-paper/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent border-b border-transparent")
      }
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          hash="hero"
          onClick={(e) => handleSectionClick(e, "hero")}
          className="text-ink text-base font-medium tracking-wide hover:text-accent transition-colors duration-300"
        >
          {t("brand.name")}
        </Link>

        <div className="flex items-center gap-6 sm:gap-8">
          <nav className="hidden md:flex items-center gap-8">
            {SECTIONS.map((s) => (
              <Link
                key={s.id}
                to="/"
                hash={s.id}
                onClick={(e) => handleSectionClick(e, s.id)}
                className="link-underline text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors duration-300"
              >
                {t(s.key)}
              </Link>
            ))}
            <Link
              to="/blog"
              className="link-underline text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors duration-300"
              activeProps={{ className: "text-ink" }}
            >
              {t("nav.blog")}
            </Link>
          </nav>


          <LanguageSwitcher />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-ink p-3 -mr-2 min-w-[44px] min-h-[44px] flex flex-col justify-center items-center"
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className="block w-5 h-px bg-ink mb-1.5" />
            <span className="block w-5 h-px bg-ink mb-1.5" />
            <span className="block w-5 h-px bg-ink" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-paper">
          <nav className="px-6 py-8 flex flex-col gap-6">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-start text-sm tracking-widest uppercase text-muted hover:text-ink transition-all duration-500"
              >
                {t(s.key)}
              </button>
            ))}
            <Link
              to="/blog"
              onClick={() => setOpen(false)}
              className="text-start text-sm tracking-widest uppercase text-muted hover:text-ink transition-all duration-500"
            >
              {t("nav.blog")}
            </Link>
          </nav>

        </div>
      )}
    </header>
  );
}
