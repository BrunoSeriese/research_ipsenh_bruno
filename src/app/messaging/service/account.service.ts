import { Injectable } from '@angular/core';
import { UserAccount } from '../models/useraccount.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  constructor(
    private http: HttpClient
  ) { }

  public createAccount(userAccount: UserAccount) {
    return this.http.post<void>("http://localhost:8080/api/v1/project", userAccount);
  }
}
