import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
onHeaderSearch=new Subject();

labelEditorDialogVisible=false;
labelUpdated=new Subject();
  constructor() { }
}
