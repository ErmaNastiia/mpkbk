import { useState } from "react";
import { news } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";

// Accepts a YouTube watch/short link, a plain embed URL, or a full
// <iframe> snippet pasted from YouTube's Share > Embed button.
function resolveEmbedUrl(value) {
  if (!value) return "";
  const iframeMatch = value.match(/src=["']([^"']+)["']/);
  if (iframeMatch) return iframeMatch[1];
  const trimmed = value.trim();
  const watchMatch = trimmed.match(/[?&]v=([^&]+)/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
  const shortMatch = trimmed.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
  return trimmed;
}

// Body text supports **bold** markers and multiple paragraphs (pass an
// array of strings in translations.js instead of one long string).
function renderRichText(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      part
    ),
  );
}

// Click a card to expand it — the body slides open and the card flashes an
// orange highlight once, on the way open, then settles back to normal.
export default function News() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="news" className="section news">
      <div className="section-inner">
        <p className="eyebrow">{t.news.eyebrow}</p>
        <h2>{t.news.heading}</h2>

        <div className="news__list">
          {news.map((item, i) => {
            const copy = t.news.items[i];
            const isOpen = openId === item.id;
            return (
              <div
                className={`news-card ${isOpen ? "news-card--active" : ""}`}
                key={item.id}
              >
                <button
                  type="button"
                  className="news-card__header"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                >
                  <div className="news-card__heading">
                    <span className="news-card__date">{copy.date}</span>
                    <span className="news-card__title">{copy.title}</span>
                    {!isOpen && (
                      <span className="news-card__excerpt">{copy.excerpt}</span>
                    )}
                  </div>
                  <span className="news-card__toggle">
                    <span className="news-card__toggle-label">
                      {isOpen ? t.news.readLess : t.news.readMore}
                    </span>
                    <span className="news-card__icon" aria-hidden="true" />
                  </span>
                </button>

                <div className="news-card__body-wrap">
                  <div className="news-card__body-inner">
                    {(Array.isArray(copy.body) ? copy.body : [copy.body]).map(
                      (paragraph, pi) => (
                        <p className="news-card__body" key={pi}>
                          {renderRichText(paragraph)}
                        </p>
                      ),
                    )}
                    {item.embedUrl && (
                      <div className="news-card__video">
                        <iframe
                          src={resolveEmbedUrl(item.embedUrl)}
                          title={copy.title}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
