import { Component } from '@angular/core';
import { LanguageService } from './../service/language.service';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ HeaderComponent ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  constructor(private languageService: LanguageService){}

  greeting: string = '';
  scrollDownText: string = '';

/**
 * Subscribes to the language service to update the greeting property
 * with the corresponding translation based on the current language.
 */

  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.greeting = this.languageService.getTranslation('greeting');
      this.scrollDownText = this.languageService.getTranslation('scrollDownText');
    });
  }
}
