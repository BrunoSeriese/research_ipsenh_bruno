import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() public title: string = "";
  @Input("open") public isOpen: boolean = false;
  @Output() public close: EventEmitter<void> = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  public closeModal() {
    this.isOpen = false;
    this.close.emit();
  }
}
