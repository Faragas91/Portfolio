import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent {
  constructor(private location: Location, private router: Router) {}

  goBack() {
      this.router.navigate(['/']);
  }
}
