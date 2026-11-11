import sceneTexture from "../assets/scene-texture.webp";
import { about } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section about">
      <div className="section-inner about__grid">
        <div className="about__text">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2>{t.about.heading}</h2>
          {t.about.paragraphs.map((p, i) => (
            <p key={i} className="about__paragraph">
              {p}
            </p>
          ))}
        </div>

        <div className="about__media">
          <img src={sceneTexture} alt="" className="about__image" />
          <div className="about__stats">
            {about.stats.map((stat, i) => (
              <div key={i} className="stat">
                <span className="stat__value">{stat.value}</span>
                <span className="stat__label">{t.about.stats[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
