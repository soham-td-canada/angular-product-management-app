import {Product} from "./product.interface";

export interface SaveProductByIdServiceResponseModel {
    message: string;
    updatedProduct: Product;
}