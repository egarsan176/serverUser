import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ControlUsersService } from '../control-users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(public router: Router,
    private userControl: ControlUsersService ) { }

  ngOnInit(): void {
  }

  login() {

     console.log(this.email);
     console.log(this.password);

    // const user = {email: this.email, password: this.password};

    // this.userService.login(user).subscribe(data => {
    //   //console.log(data)
    //   this.userService.setToken(data.token);
    //   this.router.navigateByUrl('/'); //al hacer login si la petición ha ido bien, redirige a la página principal
    // })

    //paso al método login del servicio
    this.userControl.login(this.email,this.password)
      .subscribe( resp => {

        console.log(resp);//muestra el token

        //almaceno el token en el localStorage
        localStorage.setItem('token',JSON.stringify(resp));
        
        this.router.navigateByUrl('servers');
      })

  }

}
