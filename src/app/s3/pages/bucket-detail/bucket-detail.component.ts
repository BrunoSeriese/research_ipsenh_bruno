import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Bucket} from "../../models/bucket.model";
import {BucketService} from "../../services/bucket.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-bucket-detail',
  templateUrl: './bucket-detail.component.html',
  styleUrls: ['./bucket-detail.component.scss']
})
export class BucketDetailComponent implements OnInit {

  public bucket?: Bucket;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bucketService: BucketService
  ) {
    this.bucket = router.getCurrentNavigation()?.extras.state?.["bucket"];
  }

  ngOnInit(): void {
    if (!this.bucket) {
      this.route.paramMap.subscribe(paramMap => {
        this.initializeBucket(paramMap.get("bucketName")!)
      })
    }
  }

  private initializeBucket(bucketName: string): void {
    this.bucketService.getBucket(bucketName).subscribe((bucket: Bucket) => {
      this.bucket = bucket;
    }, (error: HttpErrorResponse) => {
      if (error.status == 403) {
        // TODO: navigate to unauthorized page
      }
      if (error.status == 404) {
        // TODO: navigate to not found page
      }
      if (error.status == 500) {
        // TODO: navigate to internal error page
      }
    })
  }
}
