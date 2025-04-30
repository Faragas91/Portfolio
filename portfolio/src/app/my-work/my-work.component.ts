import { Component } from '@angular/core';
import { LanguageService } from '../service/language.service';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {
  constructor(private languageservice: LanguageService) {}

  myWork: string = '';
  myWorkDescription: string = '';

  ngOnInit() {
    this.languageservice.language$.subscribe(lang => {
      this.myWork = this.languageservice.getTranslation('myWork');
      this.myWorkDescription = this.languageservice.getTranslation('myWorkDescription');
    })
  }
}
