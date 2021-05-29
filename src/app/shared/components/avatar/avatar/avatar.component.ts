import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() image ;
  @Input() label;
  @Input() border;
  @Input() active;
  @Input() smallSize;
  @Input() shadow = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.active)
  }

}
