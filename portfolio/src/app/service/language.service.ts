import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TRANSLATIONS } from './translations';

type Language = keyof typeof TRANSLATIONS;

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<Language>('en');
  language$ = this.languageSubject.asObservable();

  translations = TRANSLATIONS;

  /**
   * Sets the language of the application.
   * Emits the new language through the language$ observable.
   *
   * @param lang The language to set. Must be one of the languages specified in TRANSLATIONS.
   */
  setLanguage(lang: Language) {
    this.languageSubject.next(lang);
  }

  /**
   * Returns the translation for a given key.
   * The key is a dot-separated string of object properties to traverse to get the translation.
   * If the key does not exist in the current language's translations, returns a string indicating
   * that the translation was not found.
   *
   * @param key The key for the translation to retrieve.
   * @returns The translation for the given key, or a message indicating that it was not found.
   */
  getTranslation(key: string): string {
    const lang = this.languageSubject.value;
    const parts = key.split('.');
    let result: any = this.translations[lang]; 

    for (const part of parts) {
      if (result && result[part] !== undefined) {
        result = result[part];
      } else {
        return `Translation not found for key: ${key}`;
      }
    }
    return typeof result === 'string' ? result : JSON.stringify(result);
  }

  /**
   * Recursively translates all properties of the given object.
   *
   * @param section The object to translate.
   * @param basekey The base key to use when getting translations. If a key does not exist in the
   *     current language's translations, the key is appended to the base key before retrieval.
   *     Defaults to an empty string, meaning that the translation key is just the property name.
   */
  translateLanguage(section: any, basekey: string = '') {
    Object.keys(section).forEach((key) => {
      section[key] = this.getTranslation(`${basekey}.${key}`);
    })
  }
}
