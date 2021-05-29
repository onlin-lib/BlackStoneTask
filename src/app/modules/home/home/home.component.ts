import { Component, OnInit } from '@angular/core';
import { XhrService } from 'src/app/core/services/xhr.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { LoadingService } from 'src/app/core/services/loading.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  friends;
  cards;
  lovesFromStorag = [] ;
  persons = [{
    name: 'Sarah Adel',
    image: 'assets/images/profile.png',
    mail : 'Sarah@gmail.com',
    didFollow : false
  },
  {
    name: 'Mohamed Ahmed',
    image: 'assets/images/profile.png',
    mail : 'Sarah@gmail.com',
    didFollow : true
  }

,{
  name: 'Sarah Adel',
  image: 'assets/images/profile.png',
  mail : 'Sarah@gmail.com',
  didFollow : true
}]
  constructor(private xhr: XhrService, private storage: LocalStorageService , private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.showLoading();
    this.getMyFrindsList();
    this.getLovesFromStorage();
    setTimeout(() => {
      this.loadingService.hideLoading();
    }, 1000);
  }

  getMyFrindsList() {

    this.xhr.get('assets/dumy-data/my-friends.json').subscribe(res => {
      this.friends = res.myFriends;
    })
  }

  getMyCardsList() {

    this.xhr.get('assets/dumy-data/my-cards.json').subscribe(res => {
      this.cards = res.myCards;
      if(this.lovesFromStorag){
        this.cards.map((card , index) => {
            card.loves = this.lovesFromStorag[index];
        });
      }else{
        this.lovesFromStorag = [];
        this.cards.map((card , index) => {
          this.lovesFromStorag.push(card.loves) ;
          this.storage.setInStorage('loves' , this.lovesFromStorag);
      });
      }

    })
  }

  getLovesFromStorage(){
    this.lovesFromStorag = this.storage.getFromStorage('loves');
    this.getMyCardsList();
  }

  cardLoved(id) {
    this.cards.map((card , index) => {
      if (card.cardId === id) {
        card.loves += 1;
        this.lovesFromStorag[index]= card.loves;
      }
    });

    this.storage.setInStorage('loves' , this.lovesFromStorag);

  }

}
