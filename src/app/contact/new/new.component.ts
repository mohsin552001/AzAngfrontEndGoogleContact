import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/shared/services/services.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor(private contactService:ServicesService ,private router:Router) { }

  ngOnInit(): void {
  }
 async onSubmit(data:{title:string,labels:number[],email:string,phone:string,}){
let response =await this.contactService.create(data)
this.router.navigateByUrl('/')
  }
}
