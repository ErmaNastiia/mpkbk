import { useEffect, useState } from "react";
import logoMark from "../assets/logo-mark.webp";
import { navLinks, profile } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t, languages } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <img src={logoMark} alt="" className="nav__logo" />
          <span>{profile.name}</span>
        </a>

        <nav className={`nav__links ${open ? "nav__links--open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {t.nav[link.key]}
            </a>
          ))}

          <div className="lang-switch" role="group" aria-label="Language">
            {languages.map((option) => (
              <button
                key={option.code}
                type="button"
                className={`lang-switch__btn ${
                  lang === option.code ? "lang-switch__btn--active" : ""
                }`}
                onClick={() => setLang(option.code)}
                aria-pressed={lang === option.code}
              >
                {option.label}
              </button>
            ))}
          </div>
        </nav>

        <button
          className={`nav__toggle ${open ? "nav__toggle--open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
