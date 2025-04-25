import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Input } from '@angular/core';
import { HeaderComponent } from "./shared/header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { MyWorkComponent } from "./my-work/my-work.component";
import { ProjectsComponent } from "./projects/projects.component";

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
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  Hero = 'portfolio';
  projects = [
    {
      imageUrl: '/assets/projects/join_photo.png',
      title: 'Join',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      githubLink: 'https://github.com/Faragas91/Join.git',
      liveLink: 'https://join-app.com',
    },
    {
      imageUrl: '/assets/projects/el_pollo_loco_photo.png',
      title: 'EL Pollo Loco',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      githubLink: 'https://github.com/Faragas91/EL_POLLO_LOCO.git',
      liveLink: 'https://another-project.com',
    },
    {
      imageUrl: '/assets/projects/ring_of_fire_photo.png',
      title: 'Ring of Fire',
      techStack: ['Angular','TypeScript', 'HTML', 'SCSS', 'Firebase'],
      description: 'A card game where players take turns drawing cards and following the rules associated with each card.',
      githubLink: 'https://github.com/Faragas91/Ring-of-Fire.git',
      liveLink: 'https://ring-of-fire.com',
    },
  ];
}
