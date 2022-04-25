import { Injectable } from '@angular/core';
import { Login } from './login';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  

  private registorUrl: string;

  constructor(private http: HttpClient) {
    this.registorUrl = 'http://localhost:8081/api/registration';
  }

  
  public save(login: Login ) {
    return this.http.post<Login>(this.registorUrl, login);
  }
}
