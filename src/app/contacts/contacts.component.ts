import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../shared/services/services.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts:any=[]

  constructor(private contactService:ServicesService) { }

 async ngOnInit() {

    this.contacts =await this.contactService.getContacts()


  }


  // async delete (contactId:any){
  //   await this.contactService.deleteContact(contactId)
  //   this.contacts=await this.contactService.getContacts()
  // }


  async delete(contactId:any){
    await this.contactService.deleteContact(contactId);
    this.contacts=await this.contactService.getContacts()
  }
}
