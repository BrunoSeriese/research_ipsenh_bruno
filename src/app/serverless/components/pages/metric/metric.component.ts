import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ErrorCode, GetFunctionByIdResponse, TaskResolutionType} from 'src/app/serverless/data/function.data';
import { FunctionService } from 'src/app/serverless/services/function.service';
import { Pipe } from '@angular/core';
import {DatePipe} from "@angular/common";
import {catchError, interval, of, switchMap, takeWhile} from "rxjs";

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss']
})
export class MetricComponent implements OnInit {
  _function!: GetFunctionByIdResponse;
  hasError: boolean = false;
  error!: string;
  isLoading = false;

  constructor(private route: ActivatedRoute, private service: FunctionService, private router: Router, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.isLoading = true; // Start loading
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getfunctioninfo(id);
    })
  }

  getfunctioninfo(id: string) {
    this.service.get(id).subscribe({
      next: (func) => this._function = func,
      error: (err) => {
        this.hasError = true;
        console.log(err)
        this.error = err.error.detail;
      }
    });
  }

  transformDate(date: string): string {
    return <string>this.datePipe.transform(date, 'dd/MM/y, HH:mm', '+02:00');
  }

  handleRefresh(): void {
    this.getfunctioninfo(this._function.id);
  }

  handleDelete(): void {
    this.service.delete(this._function.id).subscribe({
      next: (res) => {},
      error: (err) => { this.hasError = true; this.error = this.error = err.message }
    })

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.navigate(['dashboard/serverless']);
  }

  protected readonly TaskResolutionType = TaskResolutionType;
}
