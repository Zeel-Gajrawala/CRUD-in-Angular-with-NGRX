import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from 'src/app/store/reducers/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from 'src/app/store/effects/product.effects';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    RouterModule,
    StoreModule.forFeature('products',ProductReducer),
    EffectsModule.forFeature([ProductEffects])
  ],
  providers:[ProductService]
})
export class ProductModule { }
