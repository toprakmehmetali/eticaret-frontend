import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    RouterModule.forChild(
      [
        {path:"ui/product",component:ProductComponent}
      ]
    ),
    CommonModule
  ]
})
export class ProductModule { }
