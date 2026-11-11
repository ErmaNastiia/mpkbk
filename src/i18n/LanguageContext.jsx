import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, languages, defaultLanguage } from "./translations";

const STORAGE_KEY = "mpkbk_lang";

function detectInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
  } catch {
    // localStorage unavailable — fall through to browser/default detection
  }

  try {
    const browserLang = (navigator.language || "").slice(0, 2).toLowerCase();
    if (translations[browserLang]) return browserLang;
  } catch {
    // navigator unavailable (unlikely in a browser, but be safe)
  }

  return defaultLanguage;
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLanguage);

  const setLang = (next) => {
    if (!translations[next]) return;
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore — switching still works for this visit
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang], languages }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
