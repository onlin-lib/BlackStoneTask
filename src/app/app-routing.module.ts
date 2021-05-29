import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot([
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path:'home',
      loadChildren: () =>
        import('../app/modules/home/home.module').then((m) => m.HomeModule),
    }
  ])],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
