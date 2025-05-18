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

  contact: {
    title: string;
    problem: string;
    descriptionFirstSection: string;
    descriptionSecondSection: string;
    descriptionThirdSection: string;
    needADeveloper: string;
    contactMe: string;
    yourName: string;
    yourEmail: string;
    yourMessage: string;
    messageSentText: string;
    privacyPolicyText1: string;
    privacyPolicyLink: string;
    privacyPolicyText2: string;
    sayHello: string;
  } = {
    title: '',
    problem: '',
    descriptionFirstSection: '',
    descriptionSecondSection: '',
    descriptionThirdSection: '',
    needADeveloper: '',
    contactMe: '',
    yourName: '',
    yourEmail: '',
    yourMessage: '',
    messageSentText: '',
    privacyPolicyText1: '',
    privacyPolicyLink: '',
    privacyPolicyText2: '',
    sayHello: ''
  };

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
   * Called when the form is submitted.
   *
   * If the form is valid and this.mailTest is false, the form data is sent to the server.
   * If the form is invalid or this.mailTest is true, the form is reset.
   *
   * @param ngForm The form that was submitted.
   */
  onSubmit(ngForm: NgForm) {
    if (!ngForm.submitted || !ngForm.form.valid) return;

    if (this.mailTest) {
      this.handleMailTest(ngForm);
    } else {
      this.sendFormData(ngForm);
    }
  }

  /**
   * Resets the form after a mail test.
   *
   * @param ngForm The form that was submitted.
   */
  private handleMailTest(ngForm: NgForm): void {
    ngForm.resetForm();
  }

  /**
   * Sends the form data to the server.
   *
   * If the request is successful, the form is reset.
   * If the request fails, the error is logged to the console.
   * When the request is complete, the message feedback is shown.
   *
   * @param ngForm The form that was submitted.
   */
  private sendFormData(ngForm: NgForm): void {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: () => ngForm.resetForm(),
        error: (error) => console.error(error),
        complete: () => this.messageFeedback()
      });
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
   * Subscribes to the language service to update the component's text properties
   * with the corresponding translations based on the current language. It sets
   * the text for contact descriptions, form descriptions, message sent text,
   * privacy policy descriptions, and the "say hello" button.
   */

  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.contactDescription();
      this.contactFormDescription();
      this.contact.messageSentText = this.languageService.getTranslation('contact.messageSentText');
      this.privacyPlolicyDescription();
      this.contact.sayHello = this.languageService.getTranslation('contact.sayHello');
    })
  }

  /**
   * Sets the contact description properties based on the current language.
   * It updates the contact text, contact problem description, first, second,
   * and third sections of the contact description, the "need a developer"
   * text and the "contact me" text.
   */

  contactDescription() {
    return  this.contact.title = this.languageService.getTranslation('contact.title'),
      this.contact.problem = this.languageService.getTranslation('contact.problem'),
      this.contact.descriptionFirstSection = this.languageService.getTranslation('contact.descriptionFirstSection'),
      this.contact.descriptionSecondSection = this.languageService.getTranslation('contact.descriptionSecondSection'),
      this.contact.descriptionThirdSection = this.languageService.getTranslation('contact.descriptionThirdSection'),
      this.contact.needADeveloper = this.languageService.getTranslation('contact.needADeveloper'),
      this.contact.contactMe = this.languageService.getTranslation('contact.contactMe');
  }

  /**
   * Updates the privacy policy text elements by setting their values
   * based on the current language. It sets the texts for the first 
   * privacy policy section, the privacy policy link, and the second 
   * section of the privacy policy.
   */

  privacyPlolicyDescription() {
    return this.contact.privacyPolicyText1 = this.languageService.getTranslation('contact.privacyPolicyText1'),
      this.contact.privacyPolicyLink = this.languageService.getTranslation('contact.privacyPolicyLink'),
      this.contact.privacyPolicyText2 = this.languageService.getTranslation('contact.privacyPolicyText2');
  }

  /**
   * Updates the form field descriptions based on the current language.
   * It sets the text for the user's name, email, and message input fields
   * using translations provided by the language service.
   */

  contactFormDescription() {
    return this.contact.yourName = this.languageService.getTranslation('contact.yourName'),
      this.contact.yourEmail = this.languageService.getTranslation('contact.yourEmail'),
      this.contact.yourMessage = this.languageService.getTranslation('contact.yourMessage');
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
