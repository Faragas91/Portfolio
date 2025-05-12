import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LanguageService } from '../service/language.service';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ MatTooltipModule ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  
  constructor(
    private langueservice: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object) {}

  skillSet: string = '';
  growthMindset: string = '';

  skills = [
    {
      name: 'Angular', 
      image: 'assets/skills/angular.png'
    },
    {
      name: 'TypeScript', 
      image: 'assets/skills/typescript.png'
    },
    {
      name: 'JavaScript', 
      image: 'assets/skills/javascript.png'
    },
    {
      name: 'HTML', 
      image: 'assets/skills/html.png'
    },
    {
      name: 'Scrum', 
      image: 'assets/skills/scrum.png'
    },
    {
      name: 'Firebase', 
      image: 'assets/skills/firebase.png'
    },
    {
      name: 'Git', 
      image: 'assets/skills/git.png'
    },
    {
      name: 'CSS', 
      image: 'assets/skills/css.png'
    },
    {
      name: 'Rest Api', 
      image: 'assets/skills/api.png'
    },
    {
      name: 'Material Design', 
      image: 'assets/skills/material des..png'
    },
    {
      name: 'Python',
      image: 'assets/skills/python.png'
    },
    {
      name: 'Linux',
      image: 'assets/skills/linux.png'
    },
    {
      name: 'Docker',
      image: 'assets/skills/docker.png'
    },
    {
      name: 'SQL',
      image: 'assets/skills/sql.png'
    },
    {
      name: 'Growth Mindset', 
      image: 'assets/skills/grow.png'
    },
  ]

  wantToLearn = [
    {
      name: 'React',
      image: 'assets/skills/react.png'
    },
    {
      name: 'Vue JS',
      image: 'assets/skills/vue js.png'
    },

  ]

  ngOnInit() {
    this.langueservice.language$.subscribe(lang => {
      this.skillSet = this.langueservice.getTranslation('skillSet');
      this.growthMindset = this.langueservice.getTranslation('growthMindset');
    })

    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
      });
    }
  }
}


