import {Component, OnInit} from '@angular/core';
import {VMDisplay} from "../../../../models/vmdisplay.model";
import {ApiUserService} from "../../../../services/api-user.service";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  public vmDisplay: VMDisplay = {} as VMDisplay;

  constructor(private apiUserService: ApiUserService) {
  }

  ngOnInit(): void {
    this.apiUserService.getVMDisplaySubject().subscribe((vmDisplay: VMDisplay) => {
      this.vmDisplay = vmDisplay;
    });
  }

}
