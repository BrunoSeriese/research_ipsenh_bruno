import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title!: string
  @Input() value!: string | number
  @Input() symbol!: string

  constructor() { }

  ngOnInit(): void {
  }

}
