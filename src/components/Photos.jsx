import { useLanguage } from "../i18n/LanguageContext";

// Automatically picks up every image dropped into src/assets/photos — no
// code changes needed to add or remove photos, just add/remove the file.
// Sorted by filename, so name files photo-1, photo-2, ... to control order.
const photoModules = import.meta.glob("../assets/photos/*.{avif,webp,jpg,jpeg,png,gif}", {
  eager: true,
  import: "default",
});

const photos = Object.keys(photoModules)
  .sort()
  .map((path, i) => ({ id: i + 1, src: photoModules[path] }));

export default function Photos() {
  const { t } = useLanguage();
  const hasPhotos = photos.length > 0;

  return (
    <section id="photos" className="section photos">
      <div className="section-inner">
        <p className="eyebrow">{t.photos.eyebrow}</p>
        <h2>{t.photos.heading}</h2>

        <div className="photos__grid">
          {hasPhotos
            ? photos.map((photo) => (
                <div className="photo-tile photo-tile--image" key={photo.id}>
                  <img
                    src={photo.src}
                    alt={`${t.photos.captionPrefix} ${photo.id}`}
                    loading="lazy"
                  />
                </div>
              ))
            : // Fallback placeholders shown only if assets/photos is empty.
              Array.from({ length: 8 }).map((_, i) => (
                <div className="photo-tile" key={i}>
                  <span>
                    {t.photos.captionPrefix} {i + 1}
                  </span>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
