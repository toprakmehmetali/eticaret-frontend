import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryModule } from './UI/components/category/category.module';
import { ProductModule } from './UI/components/product/product.module';
import { NaviComponent } from './UI/layout/navi/navi.component';


const routes: Routes = [
  {path: "", component: NaviComponent, children: [
    { path: "category",  loadChildren: () => import("./UI/components/category/category.module").then(module => CategoryModule) },
    { path: "product",  loadChildren: () => import("./UI/components/product/product.module").then(module => ProductModule) }
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
