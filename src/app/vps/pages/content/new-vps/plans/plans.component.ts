import {Component, OnInit} from '@angular/core';
import {ApiUserService} from "../../../../services/api-user.service";
import {VMplan} from "../../../../models/vmplan.model";

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  public vmPlanList: VMplan[] = [];

  constructor(private apiUserService: ApiUserService) {
  }

  ngOnInit(): void {
    this.vmPlanList = this.apiUserService.getVMPlanList();
  }

}
