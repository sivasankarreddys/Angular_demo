import { Injectable } from '@angular/core';
import { Login } from './login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  

  private registorUrl: string;

  constructor(private http: HttpClient) {
    this.registorUrl = 'http://localhost:8081/api/';
  }

  
  public save(login: Login ) {
    return this.http.post<Login>(this.registorUrl+'registration', login);
  }

  public getAccount():Observable<Account[]>{
    //getRepos(userName: string): Observable<any> {
      return this.http.get<Account[]>(this.registorUrl+'accounts')
    }
  
  
}
