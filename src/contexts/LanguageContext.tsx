'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { Locale, Translations, LOCALE_CYCLE, translations } from '@/i18n/translations';

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (l: Locale) => void;
  cycleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('pt');

  const cycleLocale = useCallback(() => {
    setLocale((prev) => LOCALE_CYCLE[prev]);
  }, []);

  const t = translations[locale] as Translations;

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale, cycleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
