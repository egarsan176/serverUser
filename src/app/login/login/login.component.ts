import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ControlUsersService } from '../control-users.service';
import Swal from 'sweetalert2';


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
  
  login(){
    //me suscribo al login del servicio y le paso el email y la contraseña
    this.userControl.login(this.email, this.password)
    .subscribe(resp =>{
      localStorage.setItem('token',JSON.stringify(resp)); //alamceno en localStorage el token
      this.router.navigateByUrl('servers'); //hago que te redirija a servers
    }, error =>{
      console.log(error.message);
      Swal.fire({
        title: 'Error al iniciar sesión',
        text: 'Email o password proporcionados incorrectos',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    })
  }

  // login() {

  //    console.log(this.email);
  //    console.log(this.password);

  //   // const user = {email: this.email, password: this.password};

  //   // this.userService.login(user).subscribe(data => {
  //   //   //console.log(data)
  //   //   this.userService.setToken(data.token);
  //   //   this.router.navigateByUrl('/'); //al hacer login si la petición ha ido bien, redirige a la página principal
  //   // })

  //   //paso al método login del servicio control-users
  //   //me suscribo y si me devuelve un token, lo almaceno en localStorage y me dirige a servers
  //   this.userControl.login(this.email,this.password)
  //     .subscribe( resp => {

  //       console.log(resp);//muestra el token

  //       //almaceno el token en el localStorage
  //       localStorage.setItem('token',JSON.stringify(resp));
        
  //       this.router.navigateByUrl('servers');
  //     })

  // }

}
