import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiUserService} from "../../../services/api-user.service";
import {VMDisplay} from "../../../models/vmdisplay.model";

@Component({
  selector: 'app-vps-settings',
  templateUrl: './vps-settings.component.html',
  styleUrls: ['./vps-settings.component.scss']
})
export class VpsSettingsComponent implements OnInit {

  public vmDisplay: VMDisplay = {} as VMDisplay
  private vmId: string = '';

  constructor(private route: ActivatedRoute, private apiUserService: ApiUserService) {
    this.route.params.subscribe(params => {
      this.vmId = params['vmId'];
    });
  }

  ngOnInit(): void {
    this.apiUserService.getVMDisplay(this.vmId).subscribe((vmDisplay: VMDisplay) => {
      this.vmDisplay = vmDisplay;
    });
  }

}
