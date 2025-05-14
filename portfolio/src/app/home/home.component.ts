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
   * Updates the list of colleagues with their respective projects and descriptions.
   * Each colleague has a name, the project they worked on, and a description
   * retrieved from the language service for translation support.
   */

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

  /**
   * Initializes the AOS (Animate On Scroll) library to animate sections with a smooth transition.
   * This function checks if the code is running in a browser environment before initializing AOS.
   * The animations have a duration of 2000 milliseconds, run only once, and use an 'ease-in-out' easing function.
   */

  animateSections(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 2000,
        once: true,
        easing: 'ease-in-out',
        });
    }
  }
}

