import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

@Input() word='NA'
  constructor() { }

  ngOnInit(): void {
  }
  getinitials(){
    return this.word[0]

      }
}
