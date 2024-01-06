import {Injectable} from '@angular/core';
import {VMDisplay} from "../models/vmdisplay.model";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Subject} from "rxjs";
import {VMplan} from "../models/vmplan.model";

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  private vmDisplay: Subject<VMDisplay> = new BehaviorSubject<VMDisplay>({} as VMDisplay);

  private vmPlanList: VMplan[] =
    [
      {
        "id": 1,
        "name": "Standaard",
        "description": "Standaard",
        "cores": 1,
        "ram": 4,
        "storage": 100,
        "bandwidth": 100,
        "firewall": true,
        "price": 10,
        "ipv4": true,
        "ipv6": false,
        "automatic_backups": false,
        "monitoring": true,
        "snapshots": true
      },
      {
        "id": 2,
        "name": "Gouden",
        "description": "Gouden",
        "cores": 2,
        "ram": 8,
        "storage": 500,
        "bandwidth": 200,
        "firewall": true,
        "price": 20,
        "ipv4": true,
        "ipv6": true,
        "automatic_backups": true,
        "monitoring": true,
        "snapshots": true
      },
      {
        "id": 3,
        "name": "Platina",
        "description": "Platina",
        "cores": 4,
        "ram": 16,
        "storage": 1000,
        "bandwidth": 400,
        "firewall": true,
        "price": 40,
        "ipv4": true,
        "ipv6": true,
        "automatic_backups": true,
        "monitoring": true,
        "snapshots": true
      }
    ]

  constructor(private http: HttpClient) {
  }

  public getVMDisplaySubject() {
    return this.vmDisplay.asObservable();
  }

  public getVMDisplayList() {
    return this.http.get<VMDisplay[]>('http://localhost:8080/vmdisplay/list/all');
  }

  public getVMDisplay(vmId: string) {
    this.http.get<VMDisplay>('http://localhost:8080/vmdisplay/' + vmId).subscribe((vmDisplay: VMDisplay) => {
      this.vmDisplay.next(vmDisplay);
    });
    return this.vmDisplay.asObservable();
  }

  public getVMPlanList() {
    return this.vmPlanList;
  }

  public getVMPlan(planId: string) {
    let vmPlan: VMplan = {} as VMplan;
    this.vmPlanList.forEach((plan: VMplan) => {
      if (plan.id === parseInt(planId)) {
        vmPlan = plan;
      }
    });
    return vmPlan;
  }
}
