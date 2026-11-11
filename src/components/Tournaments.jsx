import { tournaments } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";

// Drop tournament logo files into src/assets/tournaments (named
// tournament-1, tournament-2, ... to control order) and set each one's link
// in data/content.js. Until a logo exists at a given position, that tile
// falls back to a numbered placeholder — same pattern as Photos.jsx.
const logoModules = import.meta.glob(
  "../assets/tournaments/*.{png,webp,jpg,jpeg,svg}",
  { eager: true, import: "default" },
);

const logos = Object.keys(logoModules)
  .sort()
  .map((path) => logoModules[path]);

export default function Tournaments() {
  const { t } = useLanguage();

  return (
    <section id="tournaments" className="section tournaments">
      <div className="section-inner">
        <p className="eyebrow">{t.tournaments.eyebrow}</p>
        <h2>{t.tournaments.heading}</h2>

        <div className="tournaments__grid">
          {tournaments.map((tournament, i) => {
            const logo = logos[i];
            return (
              <a
                key={tournament.id}
                href={tournament.href}
                className="tournament-tile"
                target="_blank"
                rel="noreferrer"
              >
                {logo ? (
                  <img
                    src={logo}
                    alt={`${t.tournaments.namePrefix} ${tournament.id}`}
                    loading="lazy"
                  />
                ) : (
                  <span>
                    {t.tournaments.namePrefix} {tournament.id}
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
