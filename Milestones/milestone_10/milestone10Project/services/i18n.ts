import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import en from '../locales/en/translation.json';
import es from '../locales/es/translation.json';

const resources = {
  en: { translation: en },
  es: { translation: es },
};

const getDeviceLanguage = () => {
  return Localization.getLocales()[0]?.languageCode || 'en';
};

// Initialize i18n synchronously with device language
i18n.use(initReactI18next).init({
  resources,
  lng: getDeviceLanguage(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
