import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import{ HomeRoutingModule} from './home-routing.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { MyFriendsModule } from 'src/app/shared/components/my-friends/my-friends.module';
import { PersonModule } from 'src/app/shared/components/person/person.module';
import { PostModule } from 'src/app/shared/components/post/post.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MyFriendsModule,
    CardModule,
    PostModule,
    PersonModule
  ]
})
export class HomeModule { }
