import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<string>('en');
  language$ = this.languageSubject.asObservable();

  setLanguage(lang: string) {
    this.languageSubject.next(lang);
  }

  getLanguage(): string {
    return this.languageSubject.value;
  }

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
      workTogether: "Let's work together",
      iAm: 'I am',
      location: 'located in Niederösterreich',
      remote: 'open to remote work',
      relocate: 'open to relocation',
      aboutMe: "<h1>Hi, I'm Stefan Redl</h1><br> - a passionate web developer with a focus on modern frontend technologies.<br> I develop intuitive and perfomant user interfaces with for example Angular, TypeScript and SCSS. My strengths lie in structured code, well thought-out UI/UX design and the ambition to make every application not only functional but also visually appealing.<br> What motivates me? The combination of creativity and logic. I love solving problems elegantly and bringing ideas to life digitally.<br> In recent years, I have worked on a wide range of projects - from small to complex web applications. I value clean code, teamwork and continuous learning",
      sendAMessage: 'Send a message',
      skillSet: 'Skill set',
      growthMindset: 'I have a special interest in learning',
      myWork: 'My work',
      myWorkDescription: 'Explore a selection of my work here - Interact with the projects to see my skills in aciton',
      joinDescription: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      elPolloLocoDescription: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      ringOfFireDescription: 'A card game where players take turns drawing cards and following the rules associated with each card.',
      teamPlayer: 'Need a team player',
      saidAboutMe: 'Here what my colleagues said about me',
      firstCollegue: 'John is a talented developer with a passion for creating innovative solutions. He is skilled in HTML, CSS, and JavaScript. He has a knack for problem-solving and enjoys tackling complex challenges. He is a team player and loves collaborating with others to bring ideas to life.',
      secondCollegue: 'Jane is a skilled designer who brings creativity and flair to every project.',
      thirdCollegue: 'Alice is a project manager with a knack for keeping teams organized and on track.',
      contact: 'Contact',
      contactProblem: 'Got a problem to solve',
      contactDescription: 'Encourage people to contact you and describe what role you are interested in. Show that you will add value to their projects through your work',
      needADeveloper: 'Need a Frontend Developer',
      contactMe: 'Contact me',
      yourName: 'Your name',
      yourEmail: 'Your email',
      yourMessage: 'Your message',
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
      workTogether: 'Lass uns zusammenarbeiten',
      iAm: 'Ich bin',
      location: 'Standort in Niederösterreich',
      remote: 'offen für Remote-Arbeit',
      relocate: 'offen für Umzüge',
      aboutMe: '<h1 Hi, ich bin Stefan Redl</h1><br> - ein leidenschaftlicher Webentwickler mit Fokus auf moderene Frontend-Technologien.<br> Ich entwickle intuitive und perfomante Benutzeroberflächen mit zum Beispiel Angular, TypeScript und SCSS. Meine Stärken liegen in strukturiertem Code, durchdachtem UI/UX-Design und dem Anspruch, jede Anwendung nicht nur funktional, sondern auch optisch anprechend zu gestalten.<br> Was mich motiviert? Die Verbindung von Kreativität und Logik. Ich liebe es, Probleme elegant zu lösen und Ideen digital zum Leben zu erwecken.<br> In den letzten Jahren habe ich an vielseitigen Projekten gearbeitet - von kleinen bis zu komplexen Webanwendungen. Dabei lege ich Wert auf sauberen Code, Teamarbeit und kontinuierliches Lernen',
      sendAMessage: 'Sende eine Nachricht',
      skillSet: 'Fähigkeiten',
      growthMindset: 'Ich habe ein besonderes Interesse am Lernen',
      myWork: 'Meine Arbeit',
      myWorkDescription: 'Hier finden Sie eine Auswahl meiner Arbeiten - Interagieren Sie mit den Projekten, um meine Fähigkeiten in Aktion zu sehen',
      joinDescription: 'Aufgabe-Manager inspiriert durch das Kanban-System. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, zuordnen Sie Benutzer und Kategorien.',
      elPolloLocoDescription: 'Spring-, Lauf- und Wurfspiel basierend auf dem objektorientierten Ansatz. Helfen Sie Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
      ringOfFireDescription: 'Ein Karten-Spiel, bei dem Spieler ihre Karten ziehen und die Regeln der jeweiligen Karte folgen.',
      teamPlayer: 'Brauchen Sie einen Teamplayer',
      saidAboutMe: 'Hier, was meine Kollegen über mich gesagt haben',
      firstCollegue: 'John ist ein talentierter Entwickler mit einer Leidenschaft für die Schaffung innovativer Lösungen. Er beherrscht HTML, CSS und JavaScript. Er hat ein Talent für Problemlösungen und genießt es, komplexe Herausforderungen zu meistern. Er ist ein Teamplayer und liebt es, mit anderen zusammenzuarbeiten, um Ideen zum Leben zu erwecken.',
      secondCollegue: 'Jane ist eine talentierte Designerin, die jedem Projekt Kreativität und Flair verleiht.',
      thirdCollegue: 'Alice ist ein Projektmanager mit einem Talent gegen Teams zu organisieren und auf dem Weg zu halten.',
      contact: 'Kontakt',
      contactProblem: 'Haben Sie ein Problem zu lösen',
      contactDescription: 'Ermutigen Sie die Leute, Sie zu kontaktieren und zu beschreiben, welche Rolle Sie interessiert. Zeigen Sie, dass Sie durch Ihre Arbeit einen Mehrwert für ihre Projekte schaffen werden',
      needADeveloper: 'Brauchen Sie einen Frontend-Entwickler',
      contactMe: 'Kontaktiere mich',
      yourName: 'Ihr Name',
      yourEmail: 'Ihre E-Mail',
      yourMessage: 'Ihre Nachricht',
      privacyPolicyText1: 'Ich habe die',
      privacyPolicyLink: 'Datenschutzerklärung',
      privacyPolicyText2: ' gelesen und stimme zu, dass meine Daten verarbeitet werden, wie beschrieben',
      sayHello: 'Sagen Sie Hallo ;)',
      legalNotice: 'Rechtliche Hinweise',
    },
  };
}
