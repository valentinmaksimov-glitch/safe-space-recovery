import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-widest uppercase text-muted">
        <div>© {year} Valentin Maksimov · {t("footer.rights")}</div>
        <div className="text-muted/80">{t("footer.privacy")}</div>
      </div>
    </footer>
  );
}
