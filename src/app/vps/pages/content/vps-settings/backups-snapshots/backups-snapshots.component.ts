import {Component, OnInit} from '@angular/core';
import {VMDisplay} from "../../../../models/vmdisplay.model";
import {ApiUserService} from "../../../../services/api-user.service";

@Component({
  selector: 'app-backups-snapshots',
  templateUrl: './backups-snapshots.component.html',
  styleUrls: ['./backups-snapshots.component.scss']
})
export class BackupsSnapshotsComponent implements OnInit {

  public vmDisplay: VMDisplay = {} as VMDisplay;

  constructor(private apiUserService: ApiUserService) {
  }

  ngOnInit(): void {
    this.apiUserService.getVMDisplaySubject().subscribe((vmDisplay: VMDisplay) => {
      this.vmDisplay = vmDisplay;
    });
  }
}
