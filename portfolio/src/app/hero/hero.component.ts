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
  constructor(private languageService: LanguageService){

  }

  greeting: string = '';

  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.greeting = this.languageService.getTranslation('greeting');
    });
  }
}
