import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    {
      path: '',
      component:HomeComponent
    }
  ])],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule { }
