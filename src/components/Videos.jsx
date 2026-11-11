import { videos } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";

// Accepts either a plain embed URL (https://www.youtube.com/embed/VIDEO_ID)
// or a full <iframe> snippet copied from YouTube's "Share > Embed" button —
// pasting the whole snippet is a common mistake, so we pull the real src
// out of it instead of trying to use the HTML string as a URL.
function resolveEmbedUrl(value) {
  if (!value) return "";
  const match = value.match(/src=["']([^"']+)["']/);
  return match ? match[1] : value.trim();
}

// Paste a real embed URL (YouTube: https://www.youtube.com/embed/VIDEO_ID,
// Twitch clip embed, etc.) into a video's `embedUrl` in data/content.js and
// the card will switch from a placeholder to a live iframe automatically.
export default function Videos() {
  const { t } = useLanguage();

  return (
    <section id="videos" className="section videos">
      <div className="section-inner">
        <p className="eyebrow">{t.videos.eyebrow}</p>
        <h2>{t.videos.heading}</h2>

        <div className="videos__grid">
          {videos.map((video, i) => {
            const src = resolveEmbedUrl(video.embedUrl);
            const copy = t.videos.items?.[i];
            const title = copy?.title || `${t.videos.titlePrefix}${video.id}`;
            return (
              <div className="video-card" key={video.id}>
                <div className="video-card__frame">
                  {src ? (
                    <iframe
                      src={src}
                      title={title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="video-card__placeholder">
                      <span className="play-icon" aria-hidden="true" />
                      <span>{t.videos.addEmbedLabel}</span>
                    </div>
                  )}
                </div>
                <p className="video-card__title">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
