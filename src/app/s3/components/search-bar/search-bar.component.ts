import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Input() value!: string;
  @Input() placeHolder!: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {

  }

  public onInput($event: Event): void {
    const target = $event.target as HTMLInputElement;

    this.valueChange.emit(target.value);
  }
}
