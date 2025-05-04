import { Component } from '@angular/core';
import { LanguageService } from '../service/language.service';
import { ProjectsComponent } from './../projects/projects.component';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [ProjectsComponent,],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {
  constructor(private languageService: LanguageService) {}
  projects: any[] = [];

  myWork: string = '';
  myWorkDescription: string = '';

  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.myWork = this.languageService.getTranslation('myWork');
      this.myWorkDescription = this.languageService.getTranslation('myWorkDescription');
      this.updateProjectDescriptions();
    })
    this.updateProjectDescriptions();
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
}
