import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {ProductDetailComponent} from "./product/product-detail/product-detail.component";

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: "saveProduct",
    component: ProductCreateComponent
  },
  {
    path: "edit-product/:id",
    component: ProductEditComponent
  },
  {
    path: "detail-product/:id",
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
