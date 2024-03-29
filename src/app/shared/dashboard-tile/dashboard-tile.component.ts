import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss']
})
export class DashboardTileComponent implements OnInit {
  @Input() title!: string
  @Input() value!: string | number
  @Input() symbol!: string

  ngOnInit() {
  }
}
