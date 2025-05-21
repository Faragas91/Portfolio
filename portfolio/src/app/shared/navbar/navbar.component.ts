import { Component } from '@angular/core';
import { LanguageService } from '../../service/language.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private languageService: LanguageService) {
    
  }

  nav: {
    aboutMe: string;
    skills: string;
    myWork: string;
    contact: string;
  } = { 
    aboutMe: '',
    skills: '', 
    myWork: '', 
    contact: '' 
  };

  currentLanguage: string = 'en';
  isMenuOpen: boolean = false;
  hamburgerFrame: number = 0;
  animationInterval: any = null;

  /**
   * Switches the language to German.
   */
  switchToGerman() {
    this.languageService.setLanguage('de');
  }
  
  /**
   * Switches the language to English.
   */
  switchToEnglish() {
    this.languageService.setLanguage('en');
  }

  /**
   * Initializes the component by subscribing to the language service and
   * updating the component's properties with the corresponding translations.
   */
  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.currentLanguage = lang;
      this.languageService.translateLanguage(this.nav, 'nav');
    })
  }

  /**
   * Toggles the mobile hamburger menu on and off.
   *
   * If the menu is open, this calls closeHamburgerMenu().
   * If the menu is closed, this calls openHamburgerMenu().
   */
  toggleHamburgerMenu() {
    if (this.isMenuOpen) {
      this.openHamburgerMenu();
    } else {
      this.closeHamburgerMenu();
    }
  }

  /**
   * Animates the hamburger menu to open by reversing the animation interval.
   *
   * The hamburger menu is set to the third frame of the animation, then
   * decremented until it reaches 0, at which point the interval is cleared
   * and the menu is set to open.
   */
  openHamburgerMenu() {
    let frame = 3;
    this.animationInterval = setInterval(() => {
      this.hamburgerFrame = frame;
      frame--;
      if (frame < 0) {
        clearInterval(this.animationInterval);
        this.isMenuOpen = false;
      }
    }, 100);
  }

  /**
   * Animates the hamburger menu to close by starting the animation interval
   * at frame 0 and incrementing until it reaches 4, at which point the
   * interval is cleared and the menu is set to closed.
   */
  closeHamburgerMenu() {
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
