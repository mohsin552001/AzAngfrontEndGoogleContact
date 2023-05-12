import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelPickerDialogComponent } from './label-picker-dialog.component';
import { DialogModule } from '../dialog/dialog.module';



@NgModule({
  declarations: [LabelPickerDialogComponent],
  exports: [LabelPickerDialogComponent],
  imports: [
    CommonModule,DialogModule
  ],
})
export class LablePickerDialogModule { }
