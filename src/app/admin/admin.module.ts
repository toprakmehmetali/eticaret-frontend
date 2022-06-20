import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponentsModule } from './admin-components/admin-components.module';
import { LayoutModule as AdminLayoutModule } from './layout/layout.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminComponentsModule,
    AdminLayoutModule
  ]
})
export class AdminModule { }
