import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { getAllProducts } from 'src/app/store/selectors/product.selector';
import * as ProductActions from 'src/app/store/actions/product.action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  loader: boolean = false;
  productList$: Observable<Product[]> = new Observable<Product[]>();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.productList$ = this.store.select(getAllProducts);
  }

  deleteProduct(productId: string) { 
    this.store.dispatch(ProductActions.DeleteProduct({productId}));
  }

}
