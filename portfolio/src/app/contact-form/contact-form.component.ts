import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LanguageService } from '../service/language.service';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule, 
    MatCheckboxModule, 
    NgClass, 
    RouterLink,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  constructor(
    public languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ){}

  contact: string = '';
  contactProblem: string = '';
  contactDescription: string = '';
  needADeveloper: string = '';
  contactMe: string = '';
  yourName: string = '';
  yourEmail: string = '';
  yourMessage: string = '';
  privacyPolicyText1: string = '';
  privacyPolicyLink: string = '';
  privacyPolicyText2: string = '';
  sayHello: string = '';

  privacyPolicyChecked: boolean = false;

  http = inject(HttpClient);
  
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = false;

  post = {
    endPoint: 'https://stefanredl.at/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.contact = this.languageService.getTranslation('contact');
      this.contactProblem = this.languageService.getTranslation('contactProblem');
      this.contactDescription = this.languageService.getTranslation('contactDescription');
      this.needADeveloper = this.languageService.getTranslation('needADeveloper');
      this.contactMe = this.languageService.getTranslation('contactMe');
      this.yourName = this.languageService.getTranslation('yourName');
      this.yourEmail = this.languageService.getTranslation('yourEmail');
      this.yourMessage = this.languageService.getTranslation('yourMessage');
      this.privacyPolicyText1 = this.languageService.getTranslation('privacyPolicyText1');
      this.privacyPolicyLink = this.languageService.getTranslation('privacyPolicyLink');
      this.privacyPolicyText2 = this.languageService.getTranslation('privacyPolicyText2');
      this.sayHello = this.languageService.getTranslation('sayHello');

      if (isPlatformBrowser(this.platformId)) {
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-in-out',
        });
      }
    })
  }

  isFromValied() {
    return this.privacyPolicyChecked &&
        this.contactData.name.trim().length >= 0 &&
        this.contactData.email.trim().length >= 0 &&
        this.contactData.message.trim().length >= 5;
  }
}
