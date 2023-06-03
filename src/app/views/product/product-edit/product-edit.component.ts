import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { Product } from '../interfaces/product.interface';
import { getAllProducts } from 'src/app/store/selectors/product.selector';
import { Observable, map } from 'rxjs';
import * as ProductActions from 'src/app/store/actions/product.action';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  loader: boolean = true;
  productId: string = '';
  editProductData: Product = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.productId = params['productId'];
    })

    if (this.productId && this.productId.length > 0) {
      let productList: Observable<Product[]> = this.store.select(getAllProducts);

      productList.pipe(
        map((productList) => productList.find((product) => product.id == this.productId))
      ).subscribe((product) => {
        this.editProductData = product!;
      });

      this.loader = false;
    }
  }

  updateProduct(updateProduct: Product) {
    let product: Update<Product> = {
      id: updateProduct.id!,
      changes: {
        ...updateProduct
      }
    }

    this.store.dispatch(ProductActions.UpdateProduct({ product }));
  }

}
