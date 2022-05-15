import { Component } from '@angular/core';
import { Account } from './account';
import { Login } from './login';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First';
  navbarOpen = false;
  

toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}
constructor(){
  
}
 

}
