import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, ContactsApiService } from '../api-client';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-detail',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-detail.html',
  styleUrl: './contact-detail.scss'
})
export class ContactDetail {
  contactForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private contactsApi: ContactsApiService,
    private router: Router) {
    this.contactForm = this.fb.group({
      uuid: [''],
      name: ['']
    });
  }

  ngOnInit() {
    const uuid = this.route.snapshot.paramMap.get('uuid')!;

    this.contactsApi.get(uuid).subscribe({
      next: (contact: Contact) => {
        this.contactForm.patchValue(contact);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


  onSave() {
    if (this.contactForm.valid) {
      const name = this.contactForm.value.name;
      const uuid = this.contactForm.value.uuid;

      this.contactsApi.save(this.contactForm.value).subscribe(
        (contact: Contact) => {
          this.router.navigate(['/']);
        }
      );
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
