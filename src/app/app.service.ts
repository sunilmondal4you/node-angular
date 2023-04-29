import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  public baseUrl = 'http://localhost:3000'
  constructor( private http: HttpClient) { }

  getUserList():Observable<any>{
    let url = `${this.baseUrl}/users`
    return this.http.get(url);
  }

  addUser(reqParam:any):Observable<any>{
    let url = `${this.baseUrl}/add`;
    return this.http.post(url, reqParam)
  }
}
