import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetAllProductsService {

  constructor(private http: HttpClient) { }

  fetchAllProducts() {
    return this.http.get('https://651f8dad44a3a8aa4769c6af.mockapi.io/angular-project-api/products');
  }
}
