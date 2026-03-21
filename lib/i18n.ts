// lib/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// Update these paths to the new location (relative to lib/i18n.ts)
import enTranslation from './locales/en/common.json';
import grTranslation from './locales/gr/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources: {
      en: { common: enTranslation },
      gr: { common: grTranslation }
    },
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    debug: false, 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;