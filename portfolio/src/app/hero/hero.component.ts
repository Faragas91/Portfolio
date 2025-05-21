import { Component } from '@angular/core';
import { LanguageService } from './../service/language.service';
import { HeaderComponent } from '../shared/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ 
    HeaderComponent,
    RouterLink,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  constructor(private languageService: LanguageService){}

  hero: {
    greeting: string;
    scrollDownText: string;
  } = {
    greeting: '',
    scrollDownText: ''
  }

/**
 * Subscribes to the language service to update the greeting property
 * with the corresponding translation based on the current language.
 */

  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.languageService.translateLanguage(this.hero, 'hero');
    });
  }
}
