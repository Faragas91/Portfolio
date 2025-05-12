import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { LanguageService } from '../service/language.service';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-teamplayer',
  standalone: true,
  imports: [],
  templateUrl: './teamplayer.component.html',
  styleUrl: './teamplayer.component.scss'
})
export class TeamplayerComponent {

    constructor(
      private languageService: LanguageService, 
      @Inject(PLATFORM_ID) private platformId: Object
    ) {}
    @Input() colleagues: {
        name: string;
        projects: string;
        description: string;
    } [] = [];

    teamPlayer: string = '';
    saidAboutMe: string = '';
  
    ngOnInit() {
      this.languageService.language$.subscribe((lang) => {
        this.teamPlayer = this.languageService.getTranslation('teamPlayer');
        this.saidAboutMe = this.languageService.getTranslation('saidAboutMe');
      });

      if (isPlatformBrowser(this.platformId)) {
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-in-out',
        });
      }
    }
}
