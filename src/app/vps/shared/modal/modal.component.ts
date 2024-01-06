import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  open(): void {
    document.addEventListener("DOMContentLoaded", function (event) {
      document.getElementById('updateProductButton')?.click();
    });
  }

}
