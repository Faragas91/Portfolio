import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object) {}

  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() techStack: string[] = [];
  @Input() description: string = '';
  @Input() githubLink: string = '';
  @Input() liveLink: string = '';
  @Input() reverseLayout: boolean = false;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
      });
    }
  }
  
}
