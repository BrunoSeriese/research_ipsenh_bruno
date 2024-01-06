import { Component, OnInit } from '@angular/core';
import { GetFunctionResponse } from 'src/app/serverless/data/function.data';
import { FunctionService } from 'src/app/serverless/services/function.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  functions: GetFunctionResponse[] = [];

  constructor(private service: FunctionService) {}

  ngOnInit(): void {
    this.handleRefresh();
  }

  handleRefresh(): void {
    this.service.getAll().subscribe({
      next: (res) => this.functions = res,
      error: (err) => console.error(err)
    });
  }
}
