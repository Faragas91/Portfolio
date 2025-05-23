import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './shared/privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './shared/legal-notice/legal-notice.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: '**', redirectTo: '' }  // fallback
  ];
