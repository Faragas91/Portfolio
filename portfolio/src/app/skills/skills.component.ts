import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LanguageService } from '../service/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ MatTooltipModule ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  
  constructor(private langueservice: LanguageService) {}

  mySkill: {
    title: string;
    growthMindset: string;
  } = {
    title: '',
    growthMindset: ''
  }

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
      image: 'assets/skills/Vue Js.png'
    },
  ]

/**
 * Initializes the component by subscribing to the language service
 * and sets the skill set and growth mindset text based on the 
 * current language.
 */

  ngOnInit() {
    this.langueservice.language$.subscribe(lang => {
      this.langueservice.translateLanguage(this.mySkill, 'mySkill');
    })
  }
}


