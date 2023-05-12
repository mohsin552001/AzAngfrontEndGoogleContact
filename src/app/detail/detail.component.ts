import { Component, OnInit, ViewChild } from '@angular/core';
import { LabelPickerDialogComponent } from '../shared/label-picker-dialog/label-picker-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../shared/services/services.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @ViewChild(LabelPickerDialogComponent)
  labelPickerDialog?: LabelPickerDialogComponent;

  editMode = false;

  contact: any;
loading=false;
  constructor(
    private route: ActivatedRoute,
    private contactService: ServicesService,private router:Router
  ) {
    this.route.params.subscribe((params) => {
      let contactId = params['id'];

      this.loadContact(contactId);
    });

  }

  async loadContact(id: number) {
    this.loading=true
    this.contact = await this.contactService.getContact(id);
    this.loading=false
  }

  ngOnInit(): void {}
  openLabelsPickerDialog() {
    this.labelPickerDialog?.open();
  }

 async delete(){
    await this.contactService.deleteContact(this.contact.id)
    this.router.navigateByUrl('/')
  }
}
