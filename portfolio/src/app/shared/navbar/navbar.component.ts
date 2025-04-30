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

  navAboutMe: string = '';
  navSkills: string = '';
  navMyWork: string = '';

  switchToGerman() {
    this.languageService.setLanguage('de');
  }
  
  switchToEnglish() {
    this.languageService.setLanguage('en');
  }

  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.navAboutMe = this.languageService.getTranslation('navAboutMe');
      this.navSkills = this.languageService.getTranslation('navSkills');
      this.navMyWork = this.languageService.getTranslation('navMyWork');
    })
  }
}
