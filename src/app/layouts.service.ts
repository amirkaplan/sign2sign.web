import { Injectable } from '@angular/core';
import { Layout } from './Models/layout';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LayoutsService {

  constructor(private http: HttpClient) {
    this.getLayouts();
   }

  getLayouts() {
    const url = 'http://sign2sign.azurewebsites.net/api/layouts';
    return this.http.get<Layout[]>(url);
  }
}
