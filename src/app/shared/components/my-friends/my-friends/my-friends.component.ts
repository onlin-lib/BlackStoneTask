import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-friends',
  templateUrl: './my-friends.component.html',
  styleUrls: ['./my-friends.component.scss']
})
export class MyFriendsComponent implements OnInit {
  @Input() friends ;
  constructor() { }

  ngOnInit(): void {
  }

}
