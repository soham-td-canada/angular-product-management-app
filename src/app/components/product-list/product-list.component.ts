import {Component, OnInit} from '@angular/core';
import { GetAllProductsService } from '../../services/get-products/get-products.service';

interface Product {
  createdAt: string;
  name: string;
  description: string;
  price: string;
  category: string;
  id: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private getAllProductsService: GetAllProductsService) {}

  ngOnInit() {
    this.getAllProductsService.fetchAllProducts().subscribe((response: any) => {
      console.log(response);
      this.products = response;
    })
  }

}
