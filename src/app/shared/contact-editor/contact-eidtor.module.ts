import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactEditorComponent } from './contact-editor.component';
import { LablePickerDialogModule } from '../label-picker-dialog/lable-picker-dialog.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ContactEditorComponent],
    exports: [ContactEditorComponent],
  imports: [
    CommonModule,LablePickerDialogModule,RouterModule,ReactiveFormsModule
  ]
})
export class ContactEidtorModule { }
