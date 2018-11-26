import { throwIfEmpty } from "rxjs/operators";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class HomeService{
    constructor(private http: HttpClient){

    }
    login(email: string, password: string){
        console.log("email: "+ email+ "pass: "+password);
        let params = new HttpParams().set('email', email).set('password',password);
        let url = "http://104.248.149.206:8090/getwork/login";
        return this.http.post(url,null,{params:params});
    }
}