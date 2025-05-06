import { Component } from '@angular/core';
import { LanguageService } from '../../service/language.service';
import { ElementRef, ViewChild} from '@angular/core';

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

  @ViewChild('german') germanRef!: ElementRef;
  @ViewChild('english') englishRef!: ElementRef;

  navAboutMe: string = '';
  navSkills: string = '';
  navMyWork: string = '';
  isMenuOpen: boolean = false;

  switchToGerman() {
    this.languageService.setLanguage('de');
  }
  
  switchToEnglish() {
    this.languageService.setLanguage('en');
  }

  ngAfterViewInit() {
    this.languageService.language$.subscribe(lang => {
      if (lang === 'de') {
        this.germanRef.nativeElement.classList.add('active');
        this.englishRef.nativeElement.classList.remove('active');
      } else {
        this.englishRef.nativeElement.classList.add('active');
        this.germanRef.nativeElement.classList.remove('active');
      }
    });
  }

  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.navAboutMe = this.languageService.getTranslation('navAboutMe');
      this.navSkills = this.languageService.getTranslation('navSkills');
      this.navMyWork = this.languageService.getTranslation('navMyWork');
    })
  }

  toggleHamburgerMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
}
