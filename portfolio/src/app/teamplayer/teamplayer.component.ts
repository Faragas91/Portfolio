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

    teamPlayer: {
      title: string;
      saidAboutMe: string;
    } = {
      title: '',
      saidAboutMe: ''
    }
  
  /**
   * Subscribes to the language service and updates the component's properties
   * with the corresponding translations.
   */
    ngOnInit() {
      this.languageService.language$.subscribe((lang) => {
        this.teamPlayer.title = this.languageService.getTranslation('teamPlayer.title');
        this.teamPlayer.saidAboutMe = this.languageService.getTranslation('teamPlayer.saidAboutMe');
      });
    }
}
