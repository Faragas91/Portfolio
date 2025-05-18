import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component'; 
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
  imports: [ HeaderComponent ],
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

  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.legalNotice.title = this.languageService.getTranslation('legalNotice.title');
      this.legalNotice.intro = this.languageService.getTranslation('legalNotice.intro');
      this.legalNotice.operator = this.languageService.getTranslation('legalNotice.operator');
      this.legalNotice.address = this.languageService.getTranslation('legalNotice.address');
      this.legalNotice.UIDTradeMembership = this.languageService.getTranslation('legalNotice.UIDTradeMembership');
      this.legalNotice.contact = this.languageService.getTranslation('legalNotice.contact');
      this.legalNotice.law = this.languageService.getTranslation('legalNotice.law');
      this.legalNotice.ODR = this.languageService.getTranslation('legalNotice.ODR');
      this.legalNotice.ODRLink = this.languageService.getTranslation('legalNotice.ODRLink');
      this.legalNotice.copyright = this.languageService.getTranslation('legalNotice.copyright');
      this.legalNotice.disclaimer = this.languageService.getTranslation('legalNotice.disclaimer');
      this.legalNotice.source = this.languageService.getTranslation('legalNotice.source');
    })
  }
}
