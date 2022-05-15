import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  
  Account : Account[] | undefined;

  constructor( private loginService: LoginServiceService) { }

  ngOnInit(): void {
  }
  getAccount(){
    let accdetails =  this.loginService.getAccount();
    accdetails.subscribe((data)=>this.Account=data);
   }
}
