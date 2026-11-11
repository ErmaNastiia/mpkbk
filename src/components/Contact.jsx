import { contact } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contacts" className="section contact">
      <div className="section-inner contact__inner">
        <div>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.heading}</h2>
          <a className="contact__email" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </div>

        <div className="contact__socials">
          {contact.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="contact__social"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
