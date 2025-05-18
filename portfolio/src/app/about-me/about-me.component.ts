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

  aboutMe: {
    workTogether: string;
    iAm: string;
    location: string;
    remote: string;
    relocate: string;
    firstSection: string;
    secondSection: string;
    thirdSection: string;
    fourthSection: string;
    myGoal: string;
    sendAMessage: string;
  } = {
    workTogether: '',
    iAm: '',
    location: '',
    remote: '',
    relocate: '',
    firstSection: '',
    secondSection: '',
    thirdSection: '',
    fourthSection: '',
    myGoal: '',
    sendAMessage: ''
  }

  /**
   * Subscribes to the language service and updates the component's properties
   * with the corresponding translations.
   */
  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.aboutMe.workTogether = this.languageService.getTranslation('aboutMe.workTogether');
      this.aboutMe.iAm = this.languageService.getTranslation('aboutMe.iAm');
      this.aboutMe.location = this.languageService.getTranslation('aboutMe.location');
      this.aboutMe.remote = this.languageService.getTranslation('aboutMe.remote');
      this.aboutMe.relocate = this.languageService.getTranslation('aboutMe.relocate');
      this.aboutMe.firstSection = this.languageService.getTranslation('aboutMe.firstSection');
      this.aboutMe.secondSection = this.languageService.getTranslation('aboutMe.secondSection');
      this.aboutMe.thirdSection = this.languageService.getTranslation('aboutMe.thirdSection');
      this.aboutMe.fourthSection = this.languageService.getTranslation('aboutMe.fourthSection');
      this.aboutMe.myGoal = this.languageService.getTranslation('aboutMe.myGoal');
      this.aboutMe.sendAMessage = this.languageService.getTranslation('aboutMe.sendAMessage');
    })
  }
}
