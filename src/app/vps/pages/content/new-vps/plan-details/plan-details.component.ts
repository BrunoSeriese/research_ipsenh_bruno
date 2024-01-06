import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiUserService} from "../../../../services/api-user.service";
import {VMplan} from "../../../../models/vmplan.model";

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.scss']
})
export class PlanDetailsComponent implements OnInit {

  public vmPlan: VMplan = {} as VMplan
  private planId: string = '';

  constructor(private route: ActivatedRoute, private apiUserService: ApiUserService) {
    this.route.params.subscribe(params => {
      this.planId = params['id'];
    });
  }

  ngOnInit(): void {
    this.vmPlan = this.apiUserService.getVMPlan(this.planId);
  }
}
