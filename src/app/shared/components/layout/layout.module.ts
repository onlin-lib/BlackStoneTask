import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SideMenuModule } from '../side-menu/side-menu.module';
import { SideFilterModule } from '../side-filter/side-filter.module';
import { RouterModule, Routes } from '@angular/router';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    SideMenuModule,
    SideFilterModule,
    RouterModule,
    LoadingModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
