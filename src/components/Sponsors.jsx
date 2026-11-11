import { sponsors } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";

// Drop sponsor logo files into src/assets/sponsors (named sponsor-1,
// sponsor-2, ... to control order) and set each one's link in
// data/content.js. Until a logo exists at a given position, that tile
// falls back to a dashed placeholder — same pattern as Tournaments.jsx.
const logoModules = import.meta.glob(
  "../assets/sponsors/*.{png,webp,jpg,jpeg,svg}",
  { eager: true, import: "default" },
);

const logos = Object.keys(logoModules)
  .sort()
  .map((path) => logoModules[path]);

export default function Sponsors() {
  const { t } = useLanguage();

  return (
    <section id="sponsors" className="section sponsors">
      <div className="section-inner">
        <p className="eyebrow">{t.sponsors.eyebrow}</p>
        <h2>{t.sponsors.heading}</h2>

        <div className="sponsors__grid">
          {sponsors.map((sponsor, i) => {
            const logo = logos[i];
            return (
              <a
                key={sponsor.id}
                href={sponsor.href}
                className={`sponsor-tile ${logo ? "sponsor-tile--filled" : ""}`}
                target="_blank"
                rel="noreferrer"
              >
                {logo ? (
                  <img
                    src={logo}
                    alt={`${t.sponsors.namePrefix} ${sponsor.id}`}
                    loading="lazy"
                  />
                ) : (
                  <span>
                    {t.sponsors.namePrefix} {sponsor.id}
                  </span>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
