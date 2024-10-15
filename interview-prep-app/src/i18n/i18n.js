import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationUA from './locales/ua/translation.json';

const resources = {
  en: { translation: translationEN },
  ua: { translation: translationUA },
};

i18n
  .use(initReactI18next) // підключення i18next до React
  .init({
    resources,
    lng: 'en', // мова за замовчуванням
    fallbackLng: 'en', // якщо немає перекладу для обраної мови
    interpolation: {
      escapeValue: false, // потрібно для React
    },
  });

export default i18n;
