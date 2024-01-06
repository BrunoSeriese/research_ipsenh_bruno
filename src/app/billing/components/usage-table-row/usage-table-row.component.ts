import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usage } from 'src/app/shared/models/usage.model';

@Component({
  selector: '[app-usage-table-row]',
  templateUrl: './usage-table-row.component.html',
  styleUrls: ['./usage-table-row.component.scss']
})
export class UsageTableRowComponent implements OnInit {


  @Input() usage!: Usage;
  @Output() clickedTableCell: EventEmitter<any> = new EventEmitter();
  @Output() clickedAction: EventEmitter<any> = new EventEmitter();
  @Output() checkedRow: EventEmitter<any> = new EventEmitter();
  values: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  emitTableCell(event:any, value: any, variableName: string) {
    event.stopPropagation();
    const clickedTableCell = {
      ...this.usage,
      clickedVariableName: variableName,
      clickedValue: value
    };
    this.clickedTableCell.emit(clickedTableCell);
  } 

  emitAction(event:any, action:string){
    event.stopPropagation();
    const clickedAction = {
      ...this.usage,
      action: action
    };
    this.clickedAction.emit(clickedAction);
  }

  emitCheckedRow(event:any){
    event.stopPropagation();
    this.checkedRow.emit(this.usage)
  }
  
  dateConverter(){
    const date = new Date(this.usage.created);
    const day = date.getDay() + 1;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return day + "-" + month + "-" + year;
  }

  numberConverter(){
    return Math.round(((this.usage.quantity * this.usage.product.cost) + Number.EPSILON) * 100) / 100 
  }

}
