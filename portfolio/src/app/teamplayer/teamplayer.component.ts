import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { LanguageService } from '../service/language.service';

@Component({
  selector: 'app-teamplayer',
  standalone: true,
  imports: [],
  templateUrl: './teamplayer.component.html',
  styleUrl: './teamplayer.component.scss'
})
export class TeamplayerComponent {

    constructor(private languageService: LanguageService) {}
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
    }
}
