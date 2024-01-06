import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { VMRequest } from "../models/vmrequest.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class VMService {
    constructor(private http: HttpClient) {}

    public createVM(vm: VMRequest): Observable<any> {
        return this.http.post('http://localhost:3000/vm/', vm);
    }

    public deleteVM(vmId: number): Observable<void> {
        return this.http.delete<void>('http://localhost:3000/vm/' + vmId);
    }

    public getVM(vmId: number): Observable<any> {
        return this.http.get('http://localhost:3000/vm/' + vmId);
    }

    public getVMs(): Observable<any> {
        return this.http.get('http://localhost:3000/vm/');
    }

    public updateVM(vm: VMRequest): Observable<any> {
        return this.http.put('http://localhost:3000/vm/', vm);
    }
}