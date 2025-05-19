import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<string>('en');
  language$ = this.languageSubject.asObservable();

  translations: { [lang: string]: { [section: string]: string | { [key: string]: string}}} = {};

  constructor(private http: HttpClient) {
    this.loadTranslations(this.languageSubject.value);
  }

  /**
   * Sets the language for the application.
   *
   * @param lang The language code to set, e.g. 'en' for English.
   */
  setLanguage(lang: string) {
    this.languageSubject.next(lang);
    this.loadTranslations(lang);
  }

  private loadTranslations(lang: string) {
    this.http.get(`assets/i18n/${lang}.json`).subscribe((tranlastions: any) => {
      this.translations[lang] = tranlastions;
    });
  }

  /**
   * Returns the translation for a given key.
   *
   * @param key A dot-separated key, e.g. 'nav.aboutMe'.
   * @returns The translation for the key in the current language.
   * @throws {string} If no translation is found for the key.
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
}
