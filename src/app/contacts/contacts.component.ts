import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../shared/services/services.service';
import { GeneralService } from '../shared/services/general.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts:any=[]
keyword =''
  constructor(private contactService:ServicesService,private generalService:GeneralService) {

    this.generalService.onHeaderSearch.subscribe((keyword:any)=>{
      this.keyword=keyword;
      this.loadContact()
    })
    this.generalService.labelUpdated.subscribe(()=>{
      this.loadContact()
    })
  }

 async ngOnInit() {

 await  this.loadContact()

  }

async loadContact(){
  this.contacts =await this.contactService.getContacts(this.keyword)
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
