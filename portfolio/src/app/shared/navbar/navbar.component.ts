import { Component } from '@angular/core';
import { LanguageService } from '../../service/language.service';
import { Input } from '@angular/core';

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
  navContact: string = '';
  currentLanguage: string = 'en';
  isMenuOpen: boolean = false;
  hamburgerFrame: number = 0;
  animationInterval: any = null;

  switchToGerman() {
    this.languageService.setLanguage('de');
  }
  
  switchToEnglish() {
    this.languageService.setLanguage('en');
  }


  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.currentLanguage = lang;
      this.navAboutMe = this.languageService.getTranslation('navAboutMe');
      this.navSkills = this.languageService.getTranslation('navSkills');
      this.navMyWork = this.languageService.getTranslation('navMyWork');
      this.navContact = this.languageService.getTranslation('navContact');
    })
  }

  toggleHamburgerMenu() {
    if (this.isMenuOpen) {
      let frame = 3;
      this.animationInterval = setInterval(() => {
        this.hamburgerFrame = frame;
        frame--;
        if (frame < 0) {
          clearInterval(this.animationInterval);
          this.isMenuOpen = false;
        }
      }, 100);
    } else {
      let frame = 0;
      this.isMenuOpen = true;
      this.animationInterval = setInterval(() => {
        this.hamburgerFrame = frame;
        frame++;
        if (frame > 3) {
          clearInterval(this.animationInterval);
        }
      }, 100);
    }
  }
  
}
