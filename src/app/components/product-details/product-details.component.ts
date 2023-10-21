import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetProductByIdService } from "../../services/get-product/get-product.service";

interface Product {
  createdAt: string;
  name: string;
  description: string;
  price: string;
  category: string;
  id: string;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  @Input() product: Product = {} as Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private getProductByIdService: GetProductByIdService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id') || '';

      // Fetch product details using productId (e.g., from an API)
      // Assign the product details to this.product

      this.getProductByIdService.fetchProduct(productId).subscribe((res: any) => {
        this.product = res;
      })
    })
  }

  goBack() {
    this.router.navigate(['/product-list']);
  }
}
