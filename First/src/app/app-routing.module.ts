import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { LoginvalidateComponent } from './loginvalidate/loginvalidate.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'account', component: AccountComponent},
   { path: 'loginvalidate', component: LoginvalidateComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
