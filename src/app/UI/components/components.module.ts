import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    CategoryModule,
    ProductModule
  ]
})
export class ComponentsModule { }
