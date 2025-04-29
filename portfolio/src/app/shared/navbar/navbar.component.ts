import { Component } from '@angular/core';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private languageService: LanguageService) {
    
  }

  switchToGerman() {
    this.languageService.setLanguage('de');
  }
  
  switchToEnglish() {
    this.languageService.setLanguage('en');
  }
  
}
