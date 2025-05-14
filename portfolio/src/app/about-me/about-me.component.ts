import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { LanguageService } from '../service/language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  constructor(private languageService: LanguageService) {}

  workTogether: string = '';
  iAm: string = '';
  location: string = '';
  remote: string = '';
  relocate: string = '';
  aboutMeHeader: string = '';
  aboutMeFirstSection: string = '';
  aboutMeSecondSection: string = '';
  aboutMeThirdSection: string = '';
  aboutMeFourthSection: string = '';
  sendAMessage: string = '';

  /**
   * Subscribes to the language service and updates the component's properties
   * with the corresponding translations.
   */
  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.workTogether = this.languageService.getTranslation('workTogether');
      this.iAm = this.languageService.getTranslation('iAm');
      this.location = this.languageService.getTranslation('location');
      this.remote = this.languageService.getTranslation('remote');
      this.relocate = this.languageService.getTranslation('relocate');
      this.aboutMeHeader = this.languageService.getTranslation('aboutMeHeader');
      this.aboutMeFirstSection = this.languageService.getTranslation('aboutMeFirstSection');
      this.aboutMeSecondSection = this.languageService.getTranslation('aboutMeSecondSection');
      this.aboutMeThirdSection = this.languageService.getTranslation('aboutMeThirdSection');
      this.aboutMeFourthSection = this.languageService.getTranslation('aboutMeFourthSection');
      this.sendAMessage = this.languageService.getTranslation('sendAMessage');
    })
  }
}
