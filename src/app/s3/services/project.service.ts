import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private project: { name: string, id: string };

  private projects: { [key: string]: string } = {
    "Hogeschool Leiden": "bc69c6d7-6285-4ccd-a537-56311b0cc292",
    "Gemeente Leiden": "7e403ff3-6ddf-4591-a8e6-2b97dbc10636",
    "Universiteit Leiden": "497177b9-a4a2-4805-aaf2-26c48b4e3805",
    "LUMC": "d51a6212-61fc-4bd6-9abe-4165d4db0ed6",
    "Naturalis Biodiversity Center": "60964af5-9f15-42ec-a958-d32c5c217ea0",
  }

  constructor() {
    this.project = {
      name: Object.keys(this.projects)[0],
      id: Object.values(this.projects)[0]
    }
  }

  public getProject():{ name: string, id: string } {
    return this.project;
  }

  public setProject(uuid: string): void {
    const key: string | undefined = Object.keys(this.projects).find(key => {
      return this.projects[key] == uuid;
    });

    if (key != undefined) {
      this.project = {
        name: key,
        id: this.projects[key]
      }
    }
  }

  public getProjects(): { [key: string]: string } {
    return this.projects;
  }
}
