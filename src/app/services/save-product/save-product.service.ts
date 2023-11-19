import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../../models/product.interface";

@Injectable({
    providedIn: 'root'
})

export class SaveProductByIdService {
    constructor(private http: HttpClient) {
    }

    saveProduct(id: string, updatedProduct: Product) {
        const { name } = updatedProduct;

        return this.http.put(
            'https://651f8dad44a3a8aa4769c6af.mockapi.io/angular-project-api/products/' + id,
            { name });
    }
}