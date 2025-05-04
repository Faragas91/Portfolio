import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./hero/hero.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { MyWorkComponent } from "./my-work/my-work.component";
import { TeamplayerComponent } from "./teamplayer/teamplayer.component";
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LanguageService } from './service/language.service';
import { PrivacyPolicyComponent } from './shared/privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './shared/legal-notice/legal-notice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeroComponent,
    AboutMeComponent,
    SkillsComponent,
    MyWorkComponent,
    TeamplayerComponent,
    ContactFormComponent,
    FooterComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
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
