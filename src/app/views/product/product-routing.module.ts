import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path:'products',
    children:[
      // {
      //   path:'add',
      // },
      // {
      //   path:'add',
      // },
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
