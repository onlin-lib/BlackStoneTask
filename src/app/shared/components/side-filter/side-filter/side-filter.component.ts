import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.scss']
})
export class SideFilterComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
