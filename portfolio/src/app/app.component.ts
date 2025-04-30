import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { MyWorkComponent } from "./my-work/my-work.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TeamplayerComponent } from "./teamplayer/teamplayer.component";
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LanguageService } from './service/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutMeComponent,
    SkillsComponent,
    MyWorkComponent,
    ProjectsComponent,
    TeamplayerComponent,
    ContactFormComponent,
    FooterComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  projects: any[] = [];
  colleagues: any[] = [];

  constructor(public languageService: LanguageService) {
  }

  ngOnInit() {
    this.languageService.language$.subscribe((lang) => {
      this.updateProjectDescriptions();
      this.updateColleagueEvaluations();
    });

    this.updateProjectDescriptions();
    this.updateColleagueEvaluations();
  }

  updateProjectDescriptions() {
    this.projects = [
      {
        imageUrl: '/assets/projects/join_photo.png',
        title: 'Join',
        techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
        description: this.languageService.getTranslation('joinDescription'),
        githubLink: 'https://github.com/Faragas91/Join.git',
        liveLink: 'https://join-app.com',
      },
      {
        imageUrl: '/assets/projects/el_pollo_loco_photo.png',
        title: 'EL Pollo Loco',
        techStack: ['JavaScript', 'HTML', 'CSS'],
        description: this.languageService.getTranslation('elPolloLocoDescription'),
        githubLink: 'https://github.com/Faragas91/EL_POLLO_LOCO.git',
        liveLink: 'https://another-project.com',
      },
      {
        imageUrl: '/assets/projects/ring_of_fire_photo.png',
        title: 'Ring of Fire',
        techStack: ['Angular','TypeScript', 'HTML', 'SCSS', 'Firebase'],
        description: this.languageService.getTranslation('ringOfFireDescription'),
        githubLink: 'https://github.com/Faragas91/Ring-of-Fire.git',
        liveLink: 'https://ring-of-fire.com',
      },
    ];
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
