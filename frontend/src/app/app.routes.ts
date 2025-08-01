import { Routes } from '@angular/router';
import { ContactList } from './contact-list/contact-list';
import { ContactDetail } from './contact-detail/contact-detail';

export const routes: Routes = [
  { path: '', component: ContactList },
  { path: 'contacts', component: ContactList },
  { path: 'detail/:uuid', component: ContactDetail } 
];
