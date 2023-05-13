import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LabelPickerDialogComponent } from '../label-picker-dialog/label-picker-dialog.component';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.scss']
})
export class ContactEditorComponent implements OnInit {
  @ViewChild(LabelPickerDialogComponent) labelPickerDialog?:LabelPickerDialogComponent;

  form:FormGroup;

  @Output()  submitClicked=new EventEmitter()
labels=[
  {id:1,title:'familyone'},
  {id:2,title:'familytwe'},
]
  constructor(private fb:FormBuilder) {
    this.form=this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,Validators.pattern('[- +()0-9]+')]],
    labels:this.fb.array([]),
    id:['']
    })
  }

  loadContact(contact :any){
    this.form.patchValue({
      name:contact.name,
      email:contact.email,
      phone:contact.phone,
      id:contact.id,


    })

    contact.labels.forEach((label:any) => {

      (this.form.get('labels') as FormArray).push(this.fb.control(label.id))
    });

  }

  get selectedLabels(){
    let labels= this.labelPickerDialog?.labels.filter((label)=>this.form.value.labels.includes(label.id))

    if(labels) return labels
    return []
  }
  ngOnInit(): void {
  }
  openLabelsPickerDialog(){
    this.labelPickerDialog?.open()
  }

  onSelectedLabelsChange(event:{id:number,selected:boolean}){
    console.log(22992)
if(event.selected){
 ( this.form.get('labels') as FormArray).push(this.fb.control(event.id))
}else{
  //remove
  let selectlabelsIds =this.form.value.labels;
  let index =selectlabelsIds.indexOf(event.id)
  if(index>-1){

  ( this.form.get('labels') as FormArray).removeAt(index)

  }
}
  }
}
