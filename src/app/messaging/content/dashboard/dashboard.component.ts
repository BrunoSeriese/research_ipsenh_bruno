import { Component, OnInit } from '@angular/core';
import { QueueDisplay } from '../../models/queuedisplay.model';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public projects: { name: string }[] = [];
  public selectedProject: string = "";

  public rabbitMQManagementUrl: string = "";

  public queueDisplayList: QueueDisplay[] = [];

  constructor(private http: HttpClient) {
    this.http.get<any>(`${environment.serverlessURL}/api/v1/vhosts`)
      .subscribe({
          next: (response) => {
            this.projects = response.slice(1);
            this.selectedProject = this.projects[0].name;

            this.getQueues();
          },
        error: (error) => {

        }
        }
      )

  }

  ngOnInit(): void {
  }

  getQueues() {
    this.http.get<any>(`${environment.serverlessURL}/api/v1/queues/${this.selectedProject}`)
      .subscribe({
        next: (response) => {
          this.queueDisplayList = response;
        },
        error: (error) => {
        }
      });
  }

  selectProject(event: Event) {
    const projectName = (event.target as HTMLSelectElement).value;
    this.selectedProject = projectName;

    this.getQueues();
  }

  getMessagesForSelectedProject() {
    let messages = 0;
    this.queueDisplayList.forEach(queue => messages += queue.messages)

    return messages;
  }
}
