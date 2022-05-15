import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-loginvalidate',
  templateUrl: './loginvalidate.component.html',
  styleUrls: ['./loginvalidate.component.css']
})
export class LoginvalidateComponent implements OnInit {
  login: Login;
  message : String | undefined;

  constructor(private loginService : LoginServiceService) { 
    this.login = new Login();
  }

  ngOnInit(): void {
  }
  
  loginvalidate(login:Login) {
    // alert(login.username+"--"+login.password)
     if(login.username==null) {
       this.message="please enter user name "
     }
     if (login.password==null){
         this.message="please enter password"
       }
     
     // this.loginService.loginvalidate(this.login).subscribe(result => "successfully validated user");
    
}

}
