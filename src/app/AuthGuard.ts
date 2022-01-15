import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
 
@Injectable({
    providedIn: 'root',
  })
  export class AuthGuard implements CanActivate, CanActivateChild {
      // Esta interface nos obliga a tener un método llamado canActivate, que recibe dos argumentos:
      // la ruta, que será de tipo ActivatedRouteSnapshot
      // el estado del router, que será de tipo RouterStateSnapshot
      
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | any {
    return this.authService
      .isAuthenticated()

      .then((authenticated) => {
        if (authenticated) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      });
    }

    //Cómo proteger las child routes usando canActivateChild
    canActivateChild(route: ActivatedRouteSnapshot, 

        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        return this.canActivate(route, state);

}
}

     // El método canActivate nos puede devolver varias cosas (son alternativas, por eso debemos usar el or operator):
    // un observable, que resultará en un boolean.  (de manera asíncrona)
    // una promesa, que resultará en un boolean.    (de manera asíncrona)
    // sencillamente un boolean, tal cual.          (de manera síncrona)




// Los guardianes de rutas (en inglés, route guards) son configuraciones de código
// que podemos hacer antes de acceder a una ruta o una vez abandonamos una ruta.