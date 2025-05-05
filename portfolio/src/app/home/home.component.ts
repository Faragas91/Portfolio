import { Component } from '@angular/core';
import { HeroComponent } from "./../hero/hero.component";
import { AboutMeComponent } from "./../about-me/about-me.component";
import { SkillsComponent } from "./../skills/skills.component";
import { MyWorkComponent } from "./../my-work/my-work.component";
import { TeamplayerComponent } from "./../teamplayer/teamplayer.component";
import { ContactFormComponent } from './../contact-form/contact-form.component';
import { LanguageService } from './../service/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    HeroComponent, 
    AboutMeComponent, 
    SkillsComponent, 
    MyWorkComponent, 
    TeamplayerComponent, 
    ContactFormComponent]
})
export class HomeComponent {
  colleagues: any[] = [];

  constructor(public languageService: LanguageService) {
  }

  ngOnInit() {
    this.languageService.language$.subscribe((lang) => {
      
      this.updateColleagueEvaluations();
    });

    this.updateColleagueEvaluations();
  }

  updateColleagueEvaluations() {
    this.colleagues = [
      {
        name: 'John Doe',
        projects: 'Project Join',
        description: this.languageService.getTranslation('firstCollegue'),
      },
      {
        name: 'Jane Smith',
        projects: 'Project EL Pollo Loco',
        description: this.languageService.getTranslation('secondCollegue'),
      },
      {
        name: 'Alice Johnson',
        projects: 'Project Ring of Fire',
        description: this.languageService.getTranslation('thirdCollegue'),
      },
    ];
  }
}

