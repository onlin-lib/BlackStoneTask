import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card;
  @Output() onCardLoved = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  love(){
    this.onCardLoved.emit(this.card.cardId);
  }
}
