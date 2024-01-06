import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreateTaskResponse, GetFunctionByIdResponse } from '../data/function.data'
import { GetFunctionResponse } from '../data/function.data';
import { Observable } from 'rxjs';

@Injectable()
export class FunctionService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAll(): Observable<GetFunctionResponse[]> {
    return this.http.get<GetFunctionResponse[]>(environment.serverlessURL + '/v1/functions');
  }

  get(functionId: string): Observable<GetFunctionByIdResponse> {
    return this.http.get<GetFunctionByIdResponse>(environment.serverlessURL + '/v1/functions/' + functionId);
  }

  delete(functionId: string): Observable<CreateTaskResponse> {
    return this.http.delete<CreateTaskResponse>(environment.serverlessURL + '/v1/functions/' + functionId);
  }

  create(body: any): Observable<CreateTaskResponse> {
    console.log(body);
    return this.http.post<CreateTaskResponse>(environment.serverlessURL + '/v1/functions', body);
  }
}
