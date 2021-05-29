import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideFilterComponent } from './side-filter/side-filter.component';
import { PersonModule} from '../person/person.module';
import { PostModule } from '../post/post.module';

@NgModule({
  declarations: [SideFilterComponent],
  imports: [
    CommonModule,
    PersonModule,
    PostModule
  ],
  exports:[
    SideFilterComponent
  ]
})
export class SideFilterModule { }
