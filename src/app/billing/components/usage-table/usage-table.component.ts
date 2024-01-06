import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usage } from 'src/app/shared/models/usage.model';

@Component({
  selector: 'app-usage-table',
  templateUrl: './usage-table.component.html',
  styleUrls: ['./usage-table.component.scss']
})
export class UsageTableComponent implements OnInit {

  @Input() usages!: Usage[];
  @Output() clickedRowEmitter: EventEmitter<any> = new EventEmitter();
  @Output() clickedTableCellEmitter: EventEmitter<any> = new EventEmitter();
  @Output() clickedActionEmitter: EventEmitter<any> = new EventEmitter();
  @Output() checkedRowsEmitter: EventEmitter<any> = new EventEmitter();

  private checkedRows: any[] = [];
  
  ngOnInit(): void {

  }
  emitRow(item:any) {
    this.clickedRowEmitter.emit(item);
  } 

  emitTableCell(event: any){
    this.clickedTableCellEmitter.emit(event);
  }
  emitAction(event: any){
    this.clickedActionEmitter.emit(event);
  }

  emitCheckedRows(rowEntry: any){
    this.checkedRows.indexOf(rowEntry) === -1 ? this.checkedRows.push(rowEntry) : this.checkedRows.splice(this.checkedRows.indexOf(rowEntry), 1)
    this.checkedRowsEmitter.emit(this.checkedRows);
  }

}
