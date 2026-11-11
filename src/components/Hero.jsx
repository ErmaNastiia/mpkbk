import { useState } from "react";
import heroBanner from "../assets/hero-banner.webp";
import wordmark from "../assets/wordmark-banner.webp";
import { profile } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";

const DISMISS_KEY = "mpkbk_intro_dismissed";

// Has this visitor already closed the intro popup? Checked once, up front,
// so there's no flash of the popup opening after the page has rendered.
function readDismissed() {
  try {
    return Boolean(localStorage.getItem(DISMISS_KEY));
  } catch {
    return false;
  }
}

export default function Hero() {
  const { t } = useLanguage();
  const [showIntro, setShowIntro] = useState(() => !readDismissed());

  const closeIntro = () => {
    setShowIntro(false);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignore — storage may be unavailable, closing still works
    }
  };

  return (
    <section id="top" className="hero">
      <img src={heroBanner} alt="" className="hero__bg" aria-hidden="true" />
      <div className="hero__scrim" aria-hidden="true" />

      <div className="section-inner hero__content">
        <div
          className="hero__wordmark-wrap"
          style={{ "--wordmark-bg": `url(${wordmark})` }}
        >
          <img
            src={wordmark}
            alt={profile.name}
            className="hero__wordmark"
          />
        </div>
        <p className="hero__tagline">{t.hero.tagline}</p>
        <p className="hero__subtitle">{t.hero.subtext}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href={profile.cta.primary.href}>
            {t.hero.ctaPrimary}
          </a>
        </div>
      </div>

      {showIntro && (
        <div className="intro-popup" role="dialog" aria-modal="true">
          <button
            className="intro-popup__backdrop"
            aria-label="Close"
            onClick={closeIntro}
          />
          <div className="intro-popup__card">
            <button
              className="intro-popup__close"
              aria-label="Close"
              onClick={closeIntro}
            >
              &times;
            </button>
            <p>{t.hero.subtext}</p>
          </div>
        </div>
      )}

      <a href="#about" className="hero__scroll" aria-label="Scroll to About">
        <span />
      </a>
    </section>
  );
}
