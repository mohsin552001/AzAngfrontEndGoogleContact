import { Component } from '@angular/core';
import { GeneralService } from './shared/services/general.service';
import { LabelsService } from './shared/services/labels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newLabelInputValue=''
  constructor(public generalService:GeneralService ,private labelService:LabelsService){

  }
  sidebarOpen=true;
  toggleSidebar(){
    this.sidebarOpen=!this.sidebarOpen
  }
  title = 'frontEnd';

 async createLabel(){
  await this.labelService.createLabels(this.newLabelInputValue)
  this.generalService.labelUpdated.next(true)
  this.generalService.labelEditorDialogVisible=false
  }
}
