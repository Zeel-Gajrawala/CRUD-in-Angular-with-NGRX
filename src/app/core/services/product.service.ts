import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/views/product/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<Product[]>('https://dummyjson.com/products');
  }

  createProduct(product:Product){
    return this.http.post('https://dummyjson.com/products/add',product);
  }

  updateProduct(productId:number | string,product:Partial<Product>){
    return this.http.put(`https://dummyjson.com/products/${productId}`,product);
  }

  deleteProduct(productId:number | string){
    return this.http.delete(`https://dummyjson.com/products/${productId}`);
  }
}
