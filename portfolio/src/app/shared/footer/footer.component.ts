import { Component } from '@angular/core';
import { LanguageService } from '../../service/language.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public languageService: LanguageService){}

  footer: {
    legalNoticePage: string;
  } = {
    legalNoticePage: '',
  }; 

  ngOnInit(){
    this.languageService.language$.subscribe(lang => {
      this.footer.legalNoticePage = this.languageService.getTranslation('footer.legalNoticePage');
    }) 
  }
}
