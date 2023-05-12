import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LabelsService {

  constructor() { }

  async getLabels(){
    let response =await axios.get(`${environment.backendUrl}/label`)
    return response.data
  }
}
