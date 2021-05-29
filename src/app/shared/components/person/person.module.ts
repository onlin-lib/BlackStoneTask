import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { AvatarModule } from '../avatar/avatar.module';


@NgModule({
  declarations: [PersonComponent],
  imports: [
    CommonModule,
    AvatarModule
  ],
  exports:[
    PersonComponent
  ]
})
export class PersonModule { }
