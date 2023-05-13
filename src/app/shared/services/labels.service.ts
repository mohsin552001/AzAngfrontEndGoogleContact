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

  async createLabels(title:any){
    let response =await axios.post(`${environment.backendUrl}/label`,{title})
    return response.data
  }

  async deleteLabels(id:any){
    let response =await axios.delete(`${environment.backendUrl}/label/${id}`)
    return response.data
  }
}
