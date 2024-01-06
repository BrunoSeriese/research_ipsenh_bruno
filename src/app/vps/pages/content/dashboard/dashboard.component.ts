import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VMDisplay} from "../../../models/vmdisplay.model";
import {Router} from "@angular/router";
import {ApiUserService} from "../../../services/api-user.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public vmDisplayList: VMDisplay[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private apiUserService: ApiUserService
  ) {
  }

  ngOnInit(): void {
    this.apiUserService.getVMDisplayList().subscribe((data: VMDisplay[]) => {
      this.vmDisplayList = data;
    });
  }

  public getStatusColor(status: String) {
    if (status === 'RUNNING') {
      return 'green';
    } else if (status === 'STOPPED') {
      return 'red';
    } else {
      return 'yellow';
    }
  }

  public openSettings(vmId: string) {
    this.router.navigate(['/vps/settings', vmId]);
  }

}
