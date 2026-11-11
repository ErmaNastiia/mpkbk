// ---------------------------------------------------------------------------
// SITE CONTENT — language-invariant data: links, embed URLs, prices, and ids.
// For text that changes between English and Russian (headings, labels,
// paragraphs), edit src/i18n/translations.js instead.
// ---------------------------------------------------------------------------

export const profile = {
  name: "MPKBK",
  cta: {
    primary: { href: "#videos" },
    secondary: { href: "#merch" },
  },
};

export const about = {
  // Values are language-invariant; labels come from translations.js
  // (about.stats), matched by array position.
  stats: [
    { value: "127K" },
    { value: "30" },
  ],
};

// News cards — text (date/title/excerpt/body) comes from translations.js
// (news.items), matched by array position. Add/remove entries in both
// places together to keep them lined up. An optional embedUrl field (YouTube
// link, embed URL, or a full <iframe> snippet — same rules as videos below)
// shows a video under that card's expanded body.
export const news = [
  {
    id: 1,
    embedUrl: "https://www.youtube.com/watch?v=E5uutX_WI74",
  },
  { id: 2 },
  { id: 3 },
];

// Tournament logos are picked up automatically from src/assets/tournaments
// (see components/Tournaments.jsx), sorted by filename and matched to the
// entries below by array position — set each tournament's `href` here (its
// official site) and drop the matching logo file in as tournament-1, -2, etc.
// Until a logo file exists at a given position, that tile shows a numbered
// placeholder instead.
export const tournaments = [
  { id: 1, href: "https://www.cybersport.ru/tournaments/cs2/cis-lan-championship-4" },
  { id: 2, href: "https://www.cybersport.ru/tags/dunav-party-lan" },
  { id: 3, href: "https://www.hltv.org/events/8339/betboom-landalan-2025" },
  { id: 4, href: "https://www.hltv.org/events/8409/betboom-landalan-2" },
  { id: 5, href: "https://www.hltv.org/events/8638/majestic-landalan-3" },
  { id: 6, href: "https://www.hltv.org/events/7527/pari-please-2023" },
  { id: 7, href: "https://www.hltv.org/events/9426/winline-mpkbk-cis-lan-season-9" },
];

// Photos are picked up automatically from src/assets/photos (see
// components/Photos.jsx) — nothing to configure here.

// Paste a real embed URL into `embedUrl` to make a card live — e.g.
// https://www.youtube.com/embed/VIDEO_ID. If you paste YouTube's full
// "Share > Embed" <iframe> code instead, that's fine too: the video card
// automatically pulls the real URL out of it. Titles come from
// translations.js (videos.titlePrefix + id) unless you set one here.
export const videos = [
  {
    id: 1,
    embedUrl:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/IVyXvLlqGNA?si=L4cGeVcrTlVNBZp7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  {
    id: 2,
    embedUrl:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/w011-KaMgFA?si=6yeQecXcWmUXJJ5-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  {
    id: 3,
    embedUrl:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/pnI5q4ZAdgU?si=bsdU6m19QXp7Bkrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  {
    id: 4,
    embedUrl:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/zed59r9XUvE?si=nLg-0vD2dD7t6XJK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  {
    id: 5,
    embedUrl: "https://www.youtube.com/embed/jj9E5x-D-gk",
  },
  {
    id: 6,
    embedUrl: "https://www.youtube.com/embed/zxDPhAl83ek",
  },
];

export const sponsors = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  href: "#",
}));

// Showcase-only merch (no cart/checkout). `href` should point to your
// external store, a Discord/DM link, or a "coming soon" page for now.
// Names come from translations.js (merch.items) and photos from
// components/Merch.jsx, both matched by array position — keep all three
// (this array, the translations, and the imports in Merch.jsx) in sync.
export const merch = [
  { id: 1, price: "€00", href: "#" },
  { id: 2, price: "€00", href: "#" },
  { id: 3, price: "€00", href: "#" },
  { id: 4, price: "€00", href: "#" },
  { id: 5, price: "€00", href: "#" },
];

export const contact = {
  email: "ermakovmpkbk@gmail.com",
  socials: [
    { label: "Twitch", href: "https://www.twitch.tv/mpkbk" },
    { label: "YouTube", href: "https://www.youtube.com/@MPKBK" },
    { label: "Instagram", href: "https://www.instagram.com/mpkbk" },
    { label: "TikTok", href: "https://tiktok.com/@mpkbk13" },
  ],
};

export const navLinks = [
  { key: "about", href: "#about" },
  { key: "news", href: "#news" },
  { key: "tournaments", href: "#tournaments" },
  { key: "photos", href: "#photos" },
  { key: "videos", href: "#videos" },
  { key: "contacts", href: "#contacts" },
];
