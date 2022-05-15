import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { Login } from '../login';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login;
 
  result : any;

  constructor(
    private router: Router,  
    private loginService: LoginServiceService) {
    this.login = new Login();
    //this.Account = new Account();
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }

  saveUser() {
  this.result=  this.loginService.save(this.login).subscribe(result => "successfully Saved Records");
  }

  
}


