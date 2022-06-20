import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponentsModule as AdminLayoutComponentModule } from './components/components.module';




@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    AdminLayoutComponentModule
  ]
})
export class LayoutModule { }
