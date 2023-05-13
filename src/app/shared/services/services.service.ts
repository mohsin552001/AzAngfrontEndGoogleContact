//This service is used for Contacts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor() {}

  async getContacts(keyWords:string='') {
    let response = await axios.get(`${environment.backendUrl}/contact?searchKeyword=${keyWords}`);
    return response.data;
  }

  async getContact(id: number) {
    let response = await axios.get(
      `${environment.backendUrl}/contact/single/${id}`
    );

    return response.data;
  }

  async deleteContact(contactId: any) {
    let response = await axios.delete(
      `${environment.backendUrl}/contact/${contactId}`
    );

    return response.data;
  }

  async create(data: {
    title: string;
    labels: number[];
    email: string;
    phone: string;
  }) {
    let response = await axios.post(`${environment.backendUrl}/contact/`, data);

    return response.data;

  }

  async update(data: {
    title: string;
    labels: number[];
    email: string;
    phone: string;
    id:number;
  }) {
    let response = await axios.patch(`${environment.backendUrl}/contact/`, data);

    return response.data;

  }
}
