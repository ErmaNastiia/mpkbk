import logoMark from "../assets/logo-mark.webp";
import { profile } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";

const year = new Date().getFullYear();

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="section-inner footer__inner">
        <a href="#top" className="footer__brand">
          <img src={logoMark} alt="" className="footer__logo" />
          <span>{profile.name}</span>
        </a>
        <p className="footer__copy">
          © {year} {profile.name}. {t.footer.rights}
        </p>
        <a href="#top" className="footer__top">
          {t.footer.backToTop}
        </a>
      </div>
    </footer>
  );
}
