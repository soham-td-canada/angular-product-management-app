import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetProductByIdService } from "../../services/get-product/get-product.service";
import { SaveProductByIdService } from "../../services/save-product/save-product.service";
import { Product } from "../../models/product.interface";
import { SaveProductByIdServiceResponseModel } from "../../models/saveProductByIdServiceResponse.interface";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  @Input() product: Product = {} as Product;
  @Input() editedProduct = {} as Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private getProductByIdService: GetProductByIdService,
    private saveProductByIdService: SaveProductByIdService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id') || '';

      // Fetch product details using productId (e.g., from an API)
      // Assign the product details to this.product
      this.loadProductDetails(productId);
    })
  }

  loadProductDetails(productId: string): void {
    this.getProductByIdService.fetchProduct(productId).subscribe((res: any) => {
      this.product = res;
      this.editedProduct = res;
    })
  }

  saveProductDetails(productId: string): void {
    this.saveProductByIdService.saveProduct(productId, this.editedProduct).subscribe((res: any) => {
      console.log(res);
      const { updatedProduct } = res;

      this.product = updatedProduct;
      this.editedProduct = updatedProduct;
    })
  }

  goBack() {
    this.router.navigate(['/product-list']);
  }
}
