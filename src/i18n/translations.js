// ---------------------------------------------------------------------------
// TRANSLATIONS — all user-facing text, in English and Russian.
// Structural data that doesn't need translating (links, embed URLs, prices,
// photo/video/sponsor/merch ids) lives in src/data/content.js instead and is
// merged with these strings inside each component.
// ---------------------------------------------------------------------------

export const translations = {
  en: {
    nav: {
      about: "About",
      news: "Announcements",
      tournaments: "Tournaments",
      photos: "Photos",
      videos: "Videos",
      sponsors: "Sponsors",
      merch: "Merch",
      contacts: "Contacts",
    },
    hero: {
      tagline:
        "I run turnkey HLTV LANs with top-30 teams and a live crowd arena.",
      subtext: "Home of CIS Counter-Strike.",
      ctaPrimary: "Watch clips",
      ctaSecondary: "Shop merch",
    },
    about: {
      eyebrow: "01 — About",
      heading: "About",
      paragraphs: [
        "MPKBK is the personal brand of a CS2 tournament organizer and caster with 14 years of experience.",
        "Since 2015 he has run his own CS tournaments — from the CIS LAN Championship series, now in its ninth edition, and LanDaLan to CS.Money Premier, CIS Rising League, Dunav Party LAN, and the PARI lineup: After Rio LAN, Patriki Vibe LAN, White Night LAN, and PARI, Please.",
      ],
      stats: ["Followers", "Tournaments"],
    },
    news: {
      eyebrow: "02 — Announcements",
      heading: "Announcements",
      readMore: "Read more",
      readLess: "Show less",
      items: [
        {
          date: "Oct 20–23, 2026",
          title: "WINLINE MPKBK CIS LAN Season 9",
          excerpt: "A CS2 LAN in Moscow — $50,000 prize pool, 16 teams.",
          body: [
            "The tournament ran **October 20–23, 2026** in Moscow.",
            "Prize pool — **$50,000**, with **16 teams** competing.",
            "**Virtus.pro** took the title, beating **Nemesis** 3:2 in the grand final.",
            "Playoff results: 1st — Virtus.pro ($30,000), 2nd — Nemesis ($9,000), 3rd–4th — ACES and K27 ($4,000 each).",
          ],
        },
        {
          date: "Sep 29 – Oct 2, 2026",
          title: "WINLINE MPKBK CIS LAN Season 8",
          excerpt:
            "A CS2 LAN in Saint Petersburg — $40,000 prize pool, 16 teams.",
          body: [
            "The tournament ran **September 29 – October 2, 2026** at RES Space in Saint Petersburg, backed by Winline.",
            "Prize pool — **$40,000**.",
            "Group stage: 16 teams split into 4 groups of 4, playing Bo3 GSL-format matches with double elimination; the top 2 teams from each group advanced to the playoffs. Playoffs ran as a single-elimination bracket: Bo3 quarterfinals and semifinals, Bo5 grand final.",
            "Team **K27** took the title.",
          ],
        },
        {
          date: "Apr 2–5, 2026",
          title: "CIS LAN Championship #4",
          excerpt: "A CS2 LAN in Moscow — $50,000 prize pool, 16 teams.",
          body: [
            "The tournament ran **April 2–5, 2026** in Moscow.",
            "Prize pool — **$50,000**: 1st — $30,000, 2nd — $10,000, 3rd — $5,000, 4th — $2,000, 5th–6th — $1,000 each, 7th–8th — $500 each.",
            "**16 teams** competed: a GSL-format group stage followed by a single-elimination playoff.",
          ],
        },
      ],
    },
    tournaments: {
      eyebrow: "03 — Tournaments",
      heading: "Tournaments",
      namePrefix: "Tournament",
    },
    photos: {
      eyebrow: "04 — Photos",
      heading: "Photos",
      captionPrefix: "Photo placeholder",
    },
    videos: {
      eyebrow: "05 — Videos",
      heading: "Videos",
      addEmbedLabel: "Add embed link",
      titlePrefix: "Clip title placeholder #",
      // One entry per video in data/content.js `videos`, matched by
      // position. Leave title "" to fall back to titlePrefix + id.
      items: [
        { title: “Making CS Better” },
        { title: “BetBoom LanDaLan #2 Announcement” },
        { title: “What's Next After CIS LAN?” },
        {
          title:
            “How Counter-Strike Ruined My Life, Then Gave Me a New One...”,
        },
        { title: “CIS LAN Is One Step Away from a MAJOR” },
        { title: "
First LAN: electroNic, csgolounge, cheatbanned vs. csgolucky, wild delays—CIS LAN #1" },
      ],
    },
    sponsors: {
      eyebrow: "06 — Sponsors",
      heading: "Sponsors",
      namePrefix: "Sponsor",
    },
    merch: {
      eyebrow: "07 — Merch",
      heading: "Merch",
      buyLabel: "Buy",
      items: [
        "MPKBK Tee — Black",
        "MPKBK Hoodie",
        "MPKBK Pin",
        "MPKBK Tea Tin",
        "MPKBK Coffee — 250g",
      ],
    },
    contact: {
      eyebrow: "08 — Contacts",
      heading: "Get in touch",
    },
    footer: {
      rights: "All rights reserved.",
      backToTop: "Back to top ↑",
    },
  },

  ru: {
    nav: {
      about: "О себе",
      news: "Анонсы",
      tournaments: "Турниры",
      photos: "Фото",
      videos: "Видео",
      sponsors: "Спонсоры",
      merch: "Мерч",
      contacts: "Контакты",
    },
    hero: {
      tagline: "Делаю HLTV LANы c топ 30 командами и ареной с живыми зрителями",
      subtext: "Здесь живёт СНГ CS",
      ctaPrimary: "Смотреть клипы",
      ctaSecondary: "В магазин",
    },
    about: {
      eyebrow: "01 — О себе",
      heading: "О себе",
      paragraphs: [
        "MPKBK — персональный бренд организатора турниров и комментатора в игре CS2 с 14-летним стажем.",
        "С 2015 года организует собственные турниры по CS: от серии CIS LAN Championship, которая доросла до девятого выпуска, и LanDaLan до CS.Money Premier, CIS Rising League, Dunav Party LAN и линейки PARI — After Rio LAN, Patriki Vibe LAN, White Night LAN и PARI, Please.",
      ],
      stats: ["Подписчиков", "Турниров"],
    },
    news: {
      eyebrow: "02 — Анонсы",
      heading: "Анонсы",
      readMore: "Читать далее",
      readLess: "Свернуть",
      items: [
        {
          date: "20–23 октября 2026",
          title: "WINLINE MPKBK CIS LAN Season 9",
          excerpt: "Турнир по CS2 в Москве — $50 000 призовых, 16 команд.",
          body: [
            "Турнир прошёл с **20 по 23 октября 2026 года** в Москве.",
            "Призовой фонд — **$50 000**, в турнире приняли участие **16 команд**.",
            "Победителем стала **Virtus.pro**, обыгравшая в гранд-финале **Nemesis** со счётом **3:2**.",
            "Итоги плей-офф: 1-е место — Virtus.pro ($30 000), 2-е место — Nemesis ($9 000), 3–4-е места — ACES и K27 (по $4 000 каждой).",
          ],
        },
        {
          date: "29 сентября – 2 октября 2026",
          title: "WINLINE MPKBK CIS LAN Season 8",
          excerpt:
            "Турнир по CS2 в Санкт-Петербурге — $40 000 призовых, 16 команд.",
          body: [
            "Турнир прошёл с **29 сентября по 2 октября 2026 года** в Санкт-Петербурге, на площадке RES Space, при поддержке Winline.",
            "Призовой фонд — **$40 000**.",
            "Групповой этап: 16 команд в 4 группах по 4, матчи Bo3 по системе GSL с выбыванием после двух поражений, в плей-офф выходили по 2 лучшие команды из группы. Плей-офф — Single Elimination: четвертьфиналы и полуфиналы Bo3, гранд-финал Bo5.",
            "Победителем турнира стала команда **K27**.",
          ],
        },
        {
          date: "2–5 апреля 2026",
          title: "CIS LAN Championship #4",
          excerpt: "Турнир по CS2 в Москве — $50 000 призовых, 16 команд.",
          body: [
            "Турнир прошёл со **2 по 5 апреля 2026 года** в Москве.",
            "Призовой фонд — **$50 000**: 1-е место — $30 000, 2-е — $10 000, 3-е — $5 000, 4-е — $2 000, 5–6-е места — $1 000, 7–8-е места — $500.",
            "В турнире приняли участие **16 команд**: групповой этап по системе GSL, плей-офф — Single Elimination.",
          ],
        },
      ],
    },
    tournaments: {
      eyebrow: "03 — Турниры",
      heading: "Турниры",
      namePrefix: "Турнир",
    },
    photos: {
      eyebrow: "04 — Фото",
      heading: "Фото",
      captionPrefix: "Фото-заглушка",
    },
    videos: {
      eyebrow: "05 — Видео",
      heading: "Видео",
      addEmbedLabel: "Добавьте ссылку",
      titlePrefix: "Заглушка названия клипа №",
      // По одной записи на видео из data/content.js `videos`, в том же
      // порядке. Пустой title "" — заглушка titlePrefix + id.
      items: [
        { title: "Делаем CS лучше" },
        { title: "Анонс BetBoom LanDaLan #2" },
        { title: "Решалы после CIS LAN?" },
        {
          title:
            "Как Counter-Strike разрушил мою жизнь, а потом подарил новую...",
        },
        { title: "CIS LAN в шаге от MAJOR" },
        { title: "
Первый LAN electroNic, csgolounge, cheatbanned vs csgolucky, дикие задержки - CIS LAN #1" },
      ],
    },
    sponsors: {
      eyebrow: "06 — Спонсоры",
      heading: "Спонсоры",
      namePrefix: "Спонсор",
    },
    merch: {
      eyebrow: "07 — Мерч",
      heading: "Мерч",
      buyLabel: "Купить",
      items: [
        "Футболка MPKBK — чёрная",
        "Худи MPKBK",
        "Значок MPKBK",
        "Банка для чая MPKBK",
        "Кофе MPKBK — 250г",
      ],
    },
    contact: {
      eyebrow: "08 — Контакты",
      heading: "На связи",
    },
    footer: {
      rights: "Все права защищены.",
      backToTop: "Наверх ↑",
    },
  },
};

export const languages = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

export const defaultLanguage = "ru";
