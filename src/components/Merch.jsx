import tshirtImg from "../assets/merch/tshirt.webp";
import hoodieImg from "../assets/merch/hoodie.webp";
import pinImg from "../assets/merch/pin.webp";
import teaTinImg from "../assets/merch/tea-tin.webp";
import coffeeImg from "../assets/merch/coffee.webp";
import { merch } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";

// Product photos, matched to `merch` in data/content.js by array position.
const images = [tshirtImg, hoodieImg, pinImg, teaTinImg, coffeeImg];

// Showcase-only for now: each "Buy" button just links out (`href` in
// data/content.js) — no cart or checkout logic. Point it at your store,
// a Discord/DM link, or a "coming soon" page until the shop is live.
export default function Merch() {
  const { t } = useLanguage();

  return (
    <section id="merch" className="section merch">
      <div className="section-inner">
        <p className="eyebrow">{t.merch.eyebrow}</p>
        <h2>{t.merch.heading}</h2>

        <div className="merch__grid">
          {merch.map((item, i) => (
            <div className="merch-card" key={item.id}>
              <div className="merch-card__image">
                <img src={images[i]} alt={t.merch.items[i]} loading="lazy" />
              </div>
              <div className="merch-card__info">
                <p className="merch-card__name">{t.merch.items[i]}</p>
                <p className="merch-card__price">{item.price}</p>
              </div>
              <a
                className="btn btn--primary btn--small"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                {t.merch.buyLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
