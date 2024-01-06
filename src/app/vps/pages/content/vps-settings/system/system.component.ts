import { Component, OnInit } from '@angular/core';
import { ApiUserService } from '../../../../services/api-user.service';
import { VMDisplay } from '../../../../models/vmdisplay.model';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {
  vmDisplay: VMDisplay | null = null;

  constructor(private apiUserService: ApiUserService) {}

  ngOnInit(): void {
    this.apiUserService.getVMDisplaySubject().subscribe((vmDisplay: VMDisplay) => {
      this.vmDisplay = vmDisplay;
      console.log(this.vmDisplay);
    });
  }
}