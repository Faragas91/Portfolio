import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component'; 
import { FooterComponent } from '../footer/footer.component';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
  imports: [ 
    HeaderComponent, 
    FooterComponent,
  ],
})
export class LegalNoticeComponent {
  constructor(
    private router: Router,
    private languageService: LanguageService) {}

  legalNotice: {
    title: string;
    intro: string;
    operator: string;
    address: string;
    UIDTradeMembership: string;
    contact: string;
    law: string;
    ODR: string;
    ODRLink: string;
    copyright: string;
    disclaimer: string;
    source: string;
  } = {
    title: '',
    intro: '',
    operator: '',
    address: '',
    UIDTradeMembership: '',
    contact: '',
    law: '',
    ODR: '',
    ODRLink: '',
    copyright: '',
    disclaimer: '',
    source: '',
  };

  /**
   * Initializes the component by subscribing to the language service and
   * translating the component's legalNotice properties based on the current
   * language.
   */
  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.languageService.translateLanguage(this.legalNotice, 'legalNotice');
    })
  }
}
