import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() toggleMenuClicked=new EventEmitter()
  constructor(private generalService:GeneralService) { }

  ngOnInit(): void {
  }
  search(event:any){
    this.generalService.onHeaderSearch.next(event.target.value)

  }
}
