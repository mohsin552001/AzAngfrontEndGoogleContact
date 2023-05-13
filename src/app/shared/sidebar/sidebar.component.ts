import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { LabelsService } from '../services/labels.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  labels:any[]=[];
  constructor(public generalService:GeneralService,private labelService:LabelsService) {
    this.loadLabels()
    this.generalService.labelUpdated.subscribe((value:any)=>{
      this.loadLabels()
    })
   }

  ngOnInit(): void {
  }
 async loadLabels(){
    this.labels = await this.labelService.getLabels()
  }


 async deleteLabel(id:any){
  await  this.labelService.deleteLabels(id)


  this.generalService.labelUpdated.next(true)
  }
}
