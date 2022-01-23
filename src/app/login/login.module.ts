import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ControlUsersService } from './control-users.service';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ControlUsersService
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
