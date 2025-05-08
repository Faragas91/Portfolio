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
      aboutMeHeader: "Hi, I'm Stefan,",
      aboutMeFirstSection: 'a passionate web developer with a focus on modern front-end technologies such as Angular, TypeScript and SCSS.',
      aboutMeSecondSection: 'What excites me about programming is the combination of logic, creativity and structure. I love analyzing problems, finding elegant solutions and translating them into user-friendly interfaces. I am particularly motivated by the moment when a complex problem becomes a clear, functioning feature.',
      aboutMeThirdSection: 'I like to work in a structured and solution-oriented way. I see challenges as a learning opportunity - I analyze, experiment and improve my approach until I find an efficient solution.  To expand my skills, I rely on continuous learning: through my own projects, online resources, exchanges with other developers or following current trends and best practices.',
      aboutMeFourthSection: 'Qualities such as analytical thinking, creativity, teamwork and perseverance help me to think my way into complex tasks and implement them successfully. My goal is to write not only functional, but also aesthetically pleasing and maintainable code - and to constantly develop myself in the process.',
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
      firstCollegue: 'Stefan is a talented developer with a passion for creating innovative solutions. He is skilled in HTML, CSS, and JavaScript. He has a knack for problem-solving and enjoys tackling complex challenges. He is a team player and loves collaborating with others to bring ideas to life.',
      secondCollegue: 'Working with Stefan was a lot of fun, his quick solution finding and calm manner made it easy for us to complete this project.',
      thirdCollegue: 'Stefan was the rock in our project work, when someone got stuck, Stefan helped us with innovative ideas and was able to demonstrate his talent for teamwork.',
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
      aboutMeHeader: 'Hi, ich bin Stefan,',
      aboutMeFirstSection: 'ein leidenschaftlicher Webentwickler mit Fokus auf moderne Frontend-Technologien wie Angular, TypeScript und SCSS.',
      aboutMeSecondSection: 'Was mich am Programmieren begeistert, ist die Kombination aus Logik, Kreativität und Struktur. Ich liebe es, Probleme zu analysieren, elegante Lösungen zu finden und diese in nutzerfreundliche Interfaces zu übersetzen. Dabei motiviert mich besonders der Moment, in dem ein komplexes Problem zu einem klaren, funktionierenden Feature wird.',
      aboutMeThirdSection: 'Ich arbeite gerne strukturiert und lösungsorientiert. Herausforderungen sehe ich als Lernchance – ich analysiere, experimentiere und verbessere meinen Ansatz, bis ich eine effiziente Lösung finde.  Um meine Fähigkeiten zu erweitern, setze ich auf kontinuierliches Lernen: durch eigene Projekte, Online-Ressourcen, Austausch mit anderen Entwickler:innen oder das Verfolgen aktueller Trends und Best Practices.',
      aboutMeFourthSection: 'Eigenschaften wie analytisches Denken, Kreativität, Teamfähigkeit und Ausdauer helfen mir, mich in komplexe Aufgaben hineinzudenken und sie erfolgreich umzusetzen. Mein Ziel ist es, nicht nur funktionalen, sondern auch ästhetisch ansprechenden und wartbaren Code zu schreiben – und mich dabei ständig weiterzuentwickeln.',
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
      firstCollegue: 'Stefan ist ein talentierter Entwickler mit einer Leidenschaft für die Schaffung innovativer Lösungen. Er beherrscht HTML, CSS und JavaScript. Er hat ein Talent für Problemlösungen und genießt es, komplexe Herausforderungen zu meistern. Er ist ein Teamplayer und liebt es, mit anderen zusammenzuarbeiten, um Ideen zum Leben zu erwecken.',
      secondCollegue: 'Die Zusammenarbeit mit Stefan hat sehr viel Spaß gemacht, durch die schnelle Lösungsfindung und ruhige Art war uns ein leichtes dieses Projekt fertigzustellen.',
      thirdCollegue: 'Stefan war bei uns Projektarbeit der Fels in der Brandung, wenn jemand nicht weiter kam, half uns Stefan mit innovative Ideen und konnte sein Talent für die Teamarbeit darbieten.',
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
