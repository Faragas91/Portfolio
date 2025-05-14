import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LanguageService } from '../service/language.service';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

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

  constructor(private languageService: LanguageService){}

  contact: string = '';
  contactProblem: string = '';
  contactDescriptionFirstSection: string = '';
  contactDescriptionSecondSection: string = '';
  contactDescriptionThirdSection: string = '';
  needADeveloper: string = '';
  contactMe: string = '';
  yourName: string = '';
  yourEmail: string = '';
  yourMessage: string = '';
  messageSentText: string = '';
  privacyPolicyText1: string = '';
  privacyPolicyLink: string = '';
  privacyPolicyText2: string = '';
  sayHello: string = '';

  privacyPolicyChecked: boolean = false;
  messageSent: boolean = false;

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

/**
 * Handles the submission of the contact form. If the form has been submitted
 * and is valid, it sends the form data to the specified endpoint. If the 
 * `mailTest` flag is false, it makes an HTTP POST request with the form data.
 * On successful submission, the form is reset, and a message feedback is shown.
 * If there is an error during submission, it logs the error to the console.
 * If `mailTest` is true, the form is simply reset without making an HTTP request.
 *
 * @param ngForm - The Angular form object containing form control and validation state.
 */

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
          complete: () => this.messageFeedback()
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  /**
   * Shows a success message after the form has been submitted.
   * Sets the "messageSent" flag to true, and resets it to false after 5 seconds.
   */
  messageFeedback() {
    this.messageSent = true;
    setTimeout(() => {
      this.messageSent = false;
    }, 5000);
  }

/**
 * Initializes the component by subscribing to the language service to get the current language.
 * Sets various text fields used in the contact form to their translated values based on the current language.
 */

  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.contact = this.languageService.getTranslation('contact');
      this.contactProblem = this.languageService.getTranslation('contactProblem');
      this.contactDescriptionFirstSection = this.languageService.getTranslation('contactDescriptionFirstSection');
      this.contactDescriptionSecondSection = this.languageService.getTranslation('contactDescriptionSecondSection');
      this.contactDescriptionThirdSection = this.languageService.getTranslation('contactDescriptionThirdSection');
      this.needADeveloper = this.languageService.getTranslation('needADeveloper');
      this.contactMe = this.languageService.getTranslation('contactMe');
      this.yourName = this.languageService.getTranslation('yourName');
      this.yourEmail = this.languageService.getTranslation('yourEmail');
      this.yourMessage = this.languageService.getTranslation('yourMessage');
      this.messageSentText = this.languageService.getTranslation('messageSentText');
      this.privacyPolicyText1 = this.languageService.getTranslation('privacyPolicyText1');
      this.privacyPolicyLink = this.languageService.getTranslation('privacyPolicyLink');
      this.privacyPolicyText2 = this.languageService.getTranslation('privacyPolicyText2');
      this.sayHello = this.languageService.getTranslation('sayHello');
    })
  }

  /**
   * Returns true if the form is valid, meaning the privacy policy checkbox is
   * checked, and the name, email, and message fields are not empty and have
   * at least a length of 5 characters.
   */
  isFromValied() {
    return this.privacyPolicyChecked &&
        this.contactData.name.trim().length >= 0 &&
        this.contactData.email.trim().length >= 0 &&
        this.contactData.message.trim().length >= 5;
  }
}
