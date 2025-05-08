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
  aboutMeMainText: string = '';
  sendAMessage: string = '';

  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.workTogether = this.languageService.getTranslation('workTogether');
      this.iAm = this.languageService.getTranslation('iAm');
      this.location = this.languageService.getTranslation('location');
      this.remote = this.languageService.getTranslation('remote');
      this.relocate = this.languageService.getTranslation('relocate');
      this.aboutMeHeader = this.languageService.getTranslation('aboutMeHeader');
      this.aboutMeMainText = this.languageService.getTranslation('aboutMeMainText');
      this.sendAMessage = this.languageService.getTranslation('sendAMessage');
    })
  }
}
