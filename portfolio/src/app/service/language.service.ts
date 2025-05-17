import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<string>('en');
  language$ = this.languageSubject.asObservable();

  /**
   * Sets the language for the application.
   *
   * @param lang The language code to set, e.g. 'en' for English.
   */
  setLanguage(lang: string) {
    this.languageSubject.next(lang);
  }

  /**
   * Retrieves the translation for a given key.
   *
   * @param key The translation key, e.g. 'navAboutMe'.
   * @returns The translated string or a fallback string indicating the key was not found.
   */
  getTranslation(key: string): string {
    const lang = this.languageSubject.value;
    return this.translations[lang][key] || `Translation not found for key: ${key}`;
  }

  translations: {[key: string]: { [key:string]: string}} = {
    en: {
      navAboutMe: 'About me',
      navSkills: 'Skill set',
      navMyWork: 'My work',
      navContact: 'Contact',
      greeting: 'Hello! I am Stefan',
      scrollDownText: 'Scroll down',
      workTogether: "Let's work together",
      iAm: 'I am',
      location: 'located in Niederösterreich',
      remote: 'open to remote work',
      relocate: 'open to relocation',
      aboutMeFirstSection: 'Hi, I am a passionate web developer with a soft spot for modern frontend technologies.',
      aboutMeSecondSection: 'I am fascinated by the combination of logic, creativity and structure in programming. I enjoy analyzing problems, developing well thought-out solutions and turning them into user-friendly interfaces. The moment when complex code is turned into a functioning feature is particularly motivating for me.',
      aboutMeThirdSection: 'I work in a structured, solution-oriented way and see challenges as an opportunity to learn. Whether through my own projects, online resources or exchanging ideas with others. I am constantly educating myself to develop better solutions.',
      aboutMeFourthSection: 'Analytical thinking, creativity, the ability to work in a team and perseverance help me to successfully implement even challenging tasks.',
      aboutMeMyGoal: 'My goal is to write functional, maintainable and aesthetically pleasing code - with the aim of constantly developing myself further.',
      sendAMessage: 'Send a message',
      skillSet: 'Skill set',
      growthMindset: 'I have a special interest in learning',
      myWork: 'My work',
      myWorkDescription: 'Explore a selection of my work here - Interact with the projects to see my skills in aciton',
      joinDescription: 'Join is a project management tool inspired by the Kanban system. Tasks can be created and moved to the relevant category using the drag-and-drop function.',
      elPolloLocoDescription: "El Pollo Loco is a classic jump & run game in which the player takes control of Pepe, who bravely fights back against the evil chickens. To defeat these hostile creatures, Pepe can either attack with Tabasco salsa bottles or jump on them. Finally, Pepe faces the final boss, who is anything but pleased with Pepe's courageous actions.",
      ringOfFireDescription: 'Ring of fire is a social card game in which players draw their cards and must follow the rules of each card. Cards are drawn until there are no cards left in the pile.',
      teamPlayer: 'Need a team player',
      saidAboutMe: 'Here what my colleagues said about me',
      firstCollegue: 'Stefan is a talented developer with a passion for creating innovative solutions. He is skilled in HTML, CSS, and JavaScript. He has a knack for problem-solving and enjoys tackling complex challenges. He is a team player and loves collaborating with others to bring ideas to life.',
      secondCollegue: 'Working with Stefan was a lot of fun, his quick solution finding and calm manner made it easy for us to complete this project.',
      thirdCollegue: 'Stefan was the rock in our project work, when someone got stuck, Stefan helped us with innovative ideas and was able to demonstrate his talent for teamwork.',
      contact: 'Contact',
      contactProblem: 'Got a problem to solve!',
      contactDescriptionFirstSection: "As a frontend developer, I develop user-friendly and modern web applications that work optimally on all devices.",
      contactDescriptionSecondSection: "My focus is on adding real value to your project through clean and maintainable code and creative UI solutions.",
      contactDescriptionThirdSection: "So if you are looking for a dedicated frontend developer who combines technical know-how with an eye for design and turns your vision into reality, don't hesitate to contact me. Let's create innovative and successful digital experiences together!",
      needADeveloper: 'Need a Frontend Developer',
      contactMe: 'Contact me',
      yourName: 'Your name',
      yourEmail: 'Your email',
      yourMessage: 'Your message',
      messageSentText: 'Thank you for your message!<br> I will get back to you shortly.',
      privacyPolicyText1: "I've read the",
      privacyPolicyLink: 'privacy policy',
      privacyPolicyText2: ' and agree to the processing of my data as outlined', 
      sayHello: 'Say Hello ;)',
      legalNotice: 'Legal Notice',
    },

    de: {
      navAboutMe: 'Über mich',
      navSkills: 'Fähigkeiten',
      navMyWork: 'Meine Arbeit',
      navContact: 'Kontakt',
      greeting: 'Hallo! Ich bin Stefan',
      scrollDownText: 'Scroll weiter',
      workTogether: 'Lass uns zusammen arbeiten',
      iAm: 'Ich bin',
      location: 'Standort in Niederösterreich',
      remote: 'offen für Remote-Arbeit',
      relocate: 'offen für Umzüge',
      aboutMeFirstSection: 'Hi, ich bin ein leidenschaftlicher Webentwickler mit einem Faible für moderne Frontend-Technologien.',
      aboutMeSecondSection: 'Mich fasziniert die Verbindung aus Logik, Kreativität und Struktur beim Programmieren. Ich analysiere gerne Probleme, entwickle durchdachte Lösungen und setze diese in nutzerfreundliche Interfaces um. Besonders motivierend ist für mich der Moment, wenn aus komplexem Code ein funktionierendes Feature entsteht.',
      aboutMeThirdSection: 'Ich arbeite strukturiert, lösungsorientiert und sehe Herausforderungen als Chance zum Lernen. Ob durch eigene Projekte, Online-Ressourcen oder den Austausch mit anderen. Ich bilde mich ständig weiter, um bessere Lösungen zu entwickeln.',
      aboutMeFourthSection: 'Analytisches Denken, Kreativität, Teamfähigkeit und Ausdauer helfen mir dabei, auch anspruchsvolle Aufgaben erfolgreich umzusetzen.',
      aboutMeMyGoal: 'Mein Ziel ist es, funktionalen, wartbaren und ästhetischen Code zu schreiben – mit dem Anspruch, mich stetig weiterzuentwickeln.',
      sendAMessage: 'Sende eine Nachricht',
      skillSet: 'Fähigkeiten',
      growthMindset: 'Ich habe ein besonderes Interesse am Lernen',
      myWork: 'Meine Arbeit',
      myWorkDescription: 'Hier finden Sie eine Auswahl meiner Arbeiten - Interagieren Sie mit den Projekten, um meine Fähigkeiten in Aktion zu sehen',
      joinDescription: 'Join ist ein Projektmanagement-Tool, das durch das Kanban-System inspiriert wurde. Dabei können Aufgaben erstellt und mithilfe der Drag-and-Drop-Funktion in die jeweilige Kategorie verschoben werden. ',
      elPolloLocoDescription: 'El Pollo Loco ist ein klassisches Jump & Run-Spiel, in dem der Spieler die Kontrolle über Pepe übernimmt, der sich mutig gegen die bösen Hühner zur Wehr setzt. Um diese feindlichen Kreaturen zu besiegen, kann Pepe entweder mit Tabasco-Salsa-Flaschen angreifen oder auf sie springen. Schließlich steht Pepe dem Endboss gegenüber, der alles andere als erfreut über Pepes mutige Aktionen ist.',
      ringOfFireDescription: 'Ring of fire ist ein gesellschaftliches Karten-Spiel, bei dem Spieler ihre Karten ziehen und die Regeln der jeweiligen Karte befolgen müssen. Es wird so lange gezogen, bis keine Karten mehr auf dem Stapel sind.',
      teamPlayer: 'Brauchen Sie einen Teamplayer',
      saidAboutMe: 'Hier ist, was meine Kollegen über mich sagten',
      firstCollegue: 'Stefan ist ein talentierter Entwickler mit einer Leidenschaft für die Schaffung innovativer Lösungen. Er beherrscht HTML, CSS und JavaScript. Er hat ein Talent für Problemlösungen und genießt es, komplexe Herausforderungen zu meistern. Er ist ein Teamplayer und liebt es, mit anderen zusammenzuarbeiten, um Ideen zum Leben zu erwecken.',
      secondCollegue: 'Die Zusammenarbeit mit Stefan hat sehr viel Spaß gemacht, durch die schnelle Lösungsfindung und ruhige Art war uns ein leichtes dieses Projekt fertigzustellen.',
      thirdCollegue: 'Stefan war bei uns Projektarbeit der Fels in der Brandung, wenn jemand nicht weiter kam, half uns Stefan mit innovative Ideen und konnte sein Talent für die Teamarbeit darbieten.',
      contact: 'Kontakt',
      contactProblem: 'Haben Sie ein Problem, das gelöst werden sollte!',
      contactDescriptionFirstSection: "Als Frontend Developer entwickle ich benutzerfreundliche und moderne Webanwendungen, die auf allen Geräten optimal funktionieren.",
      contactDescriptionSecondSection: "Mein Fokus liegt darauf, durch sauberen und wartbaren Code sowie durch kreative UI-Lösungen echten Mehrwert für Ihr Projekt zu schaffen.",
      contactDescriptionThirdSection: "Wenn Sie also einen engagierten Frontend Developer suchen, der technisches Know-how mit einem Auge für Design verbindet und Ihre Vision in die Realität umsetzt, zögern Sie nicht, mich zu kontaktieren. Lassen Sie uns gemeinsam innovative und erfolgreiche digitale Erlebnisse schaffen!",
      needADeveloper: 'Brauchen Sie einen Frontend-Entwickler',
      contactMe: 'Kontaktiere mich',
      yourName: 'Ihr Name',
      yourEmail: 'Ihre E-Mail',
      yourMessage: 'Ihre Nachricht',
      messageSentText: 'Vielen Dank für Ihre Nachricht!<br> Ich melde mich in Kürze zurück.',
      privacyPolicyText1: 'Ich habe die',
      privacyPolicyLink: 'Datenschutzerklärung',
      privacyPolicyText2: ' gelesen und stimme zu, dass meine Daten verarbeitet werden, wie beschrieben',
      sayHello: 'Sagen Sie Hallo ;)',
      legalNotice: 'Rechtliche Hinweise',
    },
  };
}
