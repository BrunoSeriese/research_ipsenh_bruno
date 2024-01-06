import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {AddBucketComponent} from "./pages/add-bucket/add-bucket.component";
import {BucketDetailComponent} from "./pages/bucket-detail/bucket-detail.component";

const routes: Routes = [
  {
    path: 's3',
    component: LandingComponent
  },
  {
    path: 'dashboard/s3',
    component: DashboardComponent
  },
  {
    path: 'dashboard/s3/add-bucket',
    component: AddBucketComponent
  },
  {
    path: 'dashboard/s3/buckets/:bucketName',
    component: BucketDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S3RoutingModule { }
