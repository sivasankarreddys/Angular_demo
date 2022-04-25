import { Component } from '@angular/core';
import { Login } from './login';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First';
  login: Login;

  constructor(
    
        private loginService: LoginServiceService) {
    this.login = new Login();
  }

  saveUser() {
    this.loginService.save(this.login).subscribe(result => "successfully Saved Records");
  }
}
