import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LabelsService } from '../services/labels.service';

@Component({
  selector: 'app-label-picker-dialog',
  templateUrl: './label-picker-dialog.component.html',
  styleUrls: ['./label-picker-dialog.component.scss']
})
export class LabelPickerDialogComponent implements OnInit {
dialogVisible=false

labels:{id:number,title:string}[] =[]
 selectedLabelsIds:any[]=[]
@Output() onSelectedLabelsChange=new EventEmitter()
  constructor(private labelService:LabelsService) {
    this.loadLabels()
  }
async loadLabels(){
  this.labels =await this.labelService.getLabels()

}


  ngOnInit(): void {
  }
open(){
  this.dialogVisible=true;

}

close(){
  this.dialogVisible=false;

}


saveButtonClicked(){
  this.close()
}

 isSelected(labelId:number){

  return this.selectedLabelsIds.includes(labelId)

}


onLabelClick(id:number){
  if(this.isSelected(id)){
   this.onSelectedLabelsChange.emit({id,selected:false})
    this.selectedLabelsIds=this.selectedLabelsIds.filter((labelId)=>labelId!==id)
  }else{
    this.onSelectedLabelsChange.emit({id,selected:true})
    this.selectedLabelsIds.push(id)
  }

}
}
