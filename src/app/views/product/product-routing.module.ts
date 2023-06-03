import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  {
    path:'products',
    children:[
      {
        path:'add',
        component:ProductAddComponent
      },
      {
        path:'edit/:productId',
        component:ProductEditComponent
      },
      {
        path:'',
        component:ProductListComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
