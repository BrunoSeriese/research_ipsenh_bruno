import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Component({
  selector: 'app-pages',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public username: string = "";
  // Temporary API URL, proxy will be used in the future
  private API_URL: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // this.testApi();
  }

  testApi() {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.get(this.API_URL + 'username', {headers: headers}).subscribe((res: any) => {
      this.username = res.username;
    });
  }
}
