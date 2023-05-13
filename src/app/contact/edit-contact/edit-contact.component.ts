import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ContactEditorComponent } from 'src/app/shared/contact-editor/contact-editor.component';

import { ServicesService } from 'src/app/shared/services/services.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  @ViewChild(ContactEditorComponent) contactEditor?: ContactEditorComponent;

  constructor(
    private contactService: ServicesService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      let contactId = params['id'];
      this.loadContact(contactId);
    });
  }

  ngOnInit(): void {}
  async loadContact(contactId: any) {
    let contact = await this.contactService.getContact(contactId);
    this.contactEditor?.loadContact(contact);
  }

  async save() {
    await this.contactService.update(this.contactEditor?.form.value);
  }
}
