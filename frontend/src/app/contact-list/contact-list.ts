import { Component, OnInit, signal } from '@angular/core';
import { ContactsApiService } from '../../../src/app/api-client/api/contactsApi.service';
import { Pageable } from '../../../src/app/api-client/model/pageable';
import { Contact, PageContact } from '../api-client';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  imports: [RouterLink],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.scss'
})
export class ContactList {

   contacts = signal<Contact[]>([]);
  constructor(private contactsApi: ContactsApiService) { }
  
  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    const pageable: Pageable = { page: 0, size: 2 }; // adjust as needed
    this.contactsApi.list(pageable).subscribe({
      next: (result: PageContact) => {
         this.contacts.set(result.content ?? []);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
