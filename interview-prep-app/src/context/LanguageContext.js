import React, { createContext, useContext, useState } from 'react';
import enTranslations from '../i18n/locales/en/translation.json';
import ukTranslations from '../i18n/locales/ua/translation.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('uk');
  const translations = language === 'uk' ? ukTranslations : enTranslations;

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'uk' ? 'en' : 'uk'));
  };

  return (
    <LanguageContext.Provider
      value={{ language, translations, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
