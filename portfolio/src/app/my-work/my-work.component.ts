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

  myWork: {
    title: string;
    description: string;
  } = {
    title: '',
    description: '',
  };

  private baseProjects = [
    {
      imageUrl: '/assets/projects/join_photo.png',
      title: 'Join',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      descriptionKey: 'myWork.joinDescription',
      githubLink: 'https://github.com/Faragas91/Join.git',
      liveLink: 'https://stefanredl.at/Join/',
    },
    {
      imageUrl: '/assets/projects/el_pollo_loco_photo.png',
      title: 'El Pollo Loco',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      descriptionKey: 'myWork.elPolloLocoDescription',
      githubLink: 'https://github.com/Faragas91/EL_POLLO_LOCO.git',
      liveLink: 'https://stefanredl.at/EL_POLLO_LOCO/',
    },
    {
      imageUrl: '/assets/projects/ring_of_fire_photo.png',
      title: 'Ring of Fire',
      techStack: ['Angular','TypeScript', 'HTML', 'SCSS', 'Firebase'],
      descriptionKey: 'myWork.ringOfFireDescription',
      githubLink: 'https://github.com/Faragas91/Ring-of-Fire.git',
      liveLink: 'https://stefanredl.at/Ring_of_fire/',
    },
  ];

  /**
   * Initialize the component by subscribing to the language service and
   * set the headings and project descriptions based on the current language.
   * Also update the project descriptions.
   */
  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.myWork.title = this.languageService.getTranslation('myWork.title');
      this.myWork.description = this.languageService.getTranslation('myWork.description');
      this.updateProjectDescriptions();
    })
    this.updateProjectDescriptions();
  }

  /**
   * Updates the project descriptions based on the current language.
   * Maps the baseProjects array and replaces the description of each project
   * with the translated description from the language service.
   */
  updateProjectDescriptions() {
    this.projects = this.baseProjects.map((project) => ({
      ...project,
      description: this.languageService.getTranslation(project.descriptionKey),
    }));
  }  
}
