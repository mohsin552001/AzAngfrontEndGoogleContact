import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
@Output() onClose=new EventEmitter();

@Input() title="Dialog Tittle"
@Input() actionButton:{
  text:string,
  onClick:()=>void
}[]=[];
  constructor() {

   }

  ngOnInit(): void {
  }

}
