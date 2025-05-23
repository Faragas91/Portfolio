import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor() {}

  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() techStack: string[] = [];
  @Input() description: string = '';
  @Input() githubLink: string = '';
  @Input() liveLink: string = '';
  @Input() reverseLayout: boolean = false;
  
}
