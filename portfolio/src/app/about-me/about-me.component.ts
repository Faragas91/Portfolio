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
   * Initializes the component by subscribing to the language service and
   * updating the component's properties with the corresponding translations.
   */
  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.languageService.translateLanguage(this.aboutMe, 'aboutMe');
    })
  }
}
