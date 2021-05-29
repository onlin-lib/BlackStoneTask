import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFriendsComponent } from './my-friends/my-friends.component';
import { AvatarModule } from 'src/app/shared/components/avatar/avatar.module';


@NgModule({
  declarations: [MyFriendsComponent],
  imports: [
    CommonModule,
    AvatarModule
  ],
  exports:[
    MyFriendsComponent
  ]
})
export class MyFriendsModule { }
