import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { DetailComponent } from '../detail/detail.component';
import { AvatarModule } from '../shared/avatar/avatar.module';
import { LablePickerDialogModule } from '../shared/label-picker-dialog/lable-picker-dialog.module';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactEidtorModule } from '../shared/contact-editor/contact-eidtor.module';
import { NewComponent } from './new/new.component';



@NgModule({
  declarations: [DetailComponent, EditContactComponent,NewComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,AvatarModule,LablePickerDialogModule,ContactEidtorModule
  ]

})
export class ContactModule { }
