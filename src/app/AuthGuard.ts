import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";
import { ControlUsersService } from "./login/control-users.service";
import { tokenData } from "./servers/interfaces/tokenData.interface";
import Swal from 'sweetalert2';   //tengo que hacer un npm install sweetAlert2 e importarlo donde quiero usarlo --> esto es para mostrar alertas con los errores
 
@Injectable({
    providedIn: 'root',
  })

export class AuthGuard implements CanActivate, CanActivateChild {


  private baseUrl: string = environment.baseUrl;
  private estado:boolean = false;

  
    // Esta interface nos obliga a tener un método llamado canActivate, que recibe dos argumentos:
    // la ruta, que será de tipo ActivatedRouteSnapshot
    // el estado del router, que será de tipo RouterStateSnapshot
    
  constructor(private router: Router,
    private controlUsers: ControlUsersService,
    private http:HttpClient) {}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | any {
  // return this.authService
  //   .isAuthenticated()

  //   .then((authenticated) => {
  //     if (authenticated) {
  //       return true;
  //     } else {
  //       this.router.navigate(['/']);
  //       return false;
  //     }
  //   });
  //   if(this.controlUsers.getToken() != null){
  //     return true;
  //   }else{
  //     this.router.navigate(['']);
  //     return false;
  //   }

  //primero compruebo si el token está en el localStorage
  if(this.controlUsers.getToken() != null){

    let token:tokenData = this.controlUsers.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.access_token}`
    })

    const options = {
      headers: headers
    }
    //como no vale solo con que el token se encuentre en el localStorage, también compruebo que no haya expirado
    //hago una peticion a tokenCheck para comprobar el estado del token 
    const url = `${this.baseUrl}/tokenCheck`;

    this.http.get(url,options).subscribe(data =>{
      //si me devuelve algo (un [] vacío) significa que el token NO ha expirado
      this.estado = true;
    }, err => {
      //si me devuelve error es que el token ha expirado
      console.log(err.message);

      Swal.fire({   //con esto creamos la alerta en la pantalla
        title: 'Su token ha expirado',
        text: 'Inicie sesión de nuevo',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      this.estado = false;
    });
    return this.estado;
  }else{
    this.router.navigate(['']);
    return this.estado;
  }
   }

  //Cómo proteger las child routes usando canActivateChild
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.canActivate(route, state);

}
}

    // El método canActivate nos puede devolver varias cosas (son alternativas, por eso debemos usar el or operator):
  // un observable, que resultará en un boolean.  (de manera asíncrona)
  // una promesa, que resultará en un boolean.    (de manera asíncrona)
  // sencillamente un boolean, tal cual.          (de manera síncrona)




// Los guardianes de rutas (en inglés, route guards) son configuraciones de código
// que podemos hacer antes de acceder a una ruta o una vez abandonamos una ruta.