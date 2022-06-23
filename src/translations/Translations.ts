import i18n from 'i18n-js';
import en from './en';
import th from './th';

i18n.fallbacks = true;
i18n.translations = { en, th };
i18n.locale = `th`;

export function t(key: string, dynamicText?: object) {
  return i18n.t(key, dynamicText);
}
