import { Component } from '@angular/core';
import { HeroComponent } from "./../hero/hero.component";
import { AboutMeComponent } from "./../about-me/about-me.component";
import { SkillsComponent } from "./../skills/skills.component";
import { MyWorkComponent } from "./../my-work/my-work.component";
import { TeamplayerComponent } from "./../teamplayer/teamplayer.component";
import { ContactFormComponent } from './../contact-form/contact-form.component';
import { LanguageService } from './../service/language.service';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';

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

  constructor(
    public languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  private baseColleagueData = [
    { name: 'David Gerliz', projects: 'Project Join', translationKey: 'teamPlayer.firstCollegue'},
    { name: 'Jane Smith', projects: 'Project EL Pollo Loco', translationKey: 'teamPlayer.secondCollegue' },
    { name: 'Alice Johnson', projects: 'Project Ring of Fire', translationKey: 'teamPlayer.thirdCollegue' },
  ];

  /**
   * Initializes the component by subscribing to the language service and updating the
   * colleague evaluations accordingly. Also calls the animate sections function to
   * animate the sections of the page and finally calls updateColleagueEvaluations to
   * initialize the list of colleagues.
   */
  
  ngOnInit() {
    this.languageService.language$.subscribe((lang) => {
      this.updateColleagueEvaluations();
    });
    this.animateSections();
    this.updateColleagueEvaluations();
  }

  /**
   * Updates the list of colleagues with translated descriptions.
   * 
   * This function maps over the baseColleagueData array and creates a new array 
   * of colleagues. Each colleague object contains the name and projects from 
   * baseColleagueData and a description obtained by translating the 
   * colleague's translationKey using the language service.
   */

  updateColleagueEvaluations(): void {
    this.colleagues = this.baseColleagueData.map(colleague => ({
      name: colleague.name,
      projects: colleague.projects,
      description: this.languageService.getTranslation(colleague.translationKey)
    }));
  }

  /**
   * Initializes the AOS (Animate On Scroll) library to animate sections with a smooth transition.
   * This function checks if the code is running in a browser environment before initializing AOS.
   * The animations have a duration of 2000 milliseconds, run only once, and use an 'ease-in-out' easing function.
   */

  animateSections(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 200,
        once: true,
        easing: 'ease-in-out',
        });
    }
  }
}

