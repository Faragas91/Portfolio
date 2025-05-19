import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<string>('en');
  language$ = this.languageSubject.asObservable();

  translations: { [lang: string]: { [section: string]: string | { [key: string]: string}}} = {
  };

  constructor(private http: HttpClient) {
    this.loadTranslations(this.languageSubject.value);
  }

  /**
   * Sets the language of the application to the given language code.
   *
   * This method loads the translations for the given language code from a JSON
   * file and then updates the language of the application by emitting the
   * language code on the language$ observable.
   *
   * @param lang The language code to set, e.g. 'en' for English.
   */
  setLanguage(lang: string) {
    this.loadTranslations(lang).then(() => {
      this.languageSubject.next(lang);
    });    
  }

  /**
   * Loads the translations for the given language code from a JSON file.
   *
   * @param lang The language code to load, e.g. 'en' for English.
   * @returns A promise that resolves once the translations have been loaded.
   * @throws {string} If the language code is invalid or the file does not exist.
   */
  private async loadTranslations(lang: string): Promise<void> {
    const translations: { [section: string]: string | { [key: string]: string } } =
      await firstValueFrom(
        this.http.get<{ [section: string]: string | { [key: string]: string } }>(`assets/i18n/${lang}.json`)
      );
    this.translations[lang] = translations;
  }


  /**
   * Returns the translation for the given key.
   *
   * @param key A dot-separated key to look up in the translations, e.g. 'nav.aboutMe'.
   * @returns The translated string, or the key itself if no translation could be found.
   */
    getTranslation(key: string): string {
      const lang = this.languageSubject.value;
      const parts = key.split('.');
      let result: any = this.translations[lang];

      for (const part of parts) {
        if (result && typeof result === 'object' && result[part] !== undefined) {
          result = result[part];
        } else {
          return key;
        }
      }
      return typeof result === 'string' ? result : JSON.stringify(result);
    }

    /**
     * Recursively translates all keys in the given section of the translations
     * into their translated values.
     *
     * @param section The section of the translations to translate. This can be a
     *   nested object.
     * @param baseKey The base key to use when looking up translations. This
     *   defaults to an empty string.
     */
    translateLanguage(section: any, baseKey: string = '') {
      Object.keys(section).forEach((key) => {
        const typedKey = key as keyof typeof section;
        section[typedKey] = this.getTranslation(`${baseKey}.${String(typedKey)}`);
      });
    };
}
