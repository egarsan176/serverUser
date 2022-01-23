import { ActivatedRouteSnapshot,  CanDeactivate,  RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CanComponentDeactivate } from "../interfaces/CanComponentDeactivate.interface";


export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  //es el método llamado cuando un usuario intente irse de la ruta
  //puede devolver un observable, una promesa o un boolean (igual que el canActivate guard)
  canDeactivate(component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.canDeactivate();


    // Como primer argumento el componente en el que nos encontremos, que será de tipo CanComponenentDeactivate
    // Como segundo argumento espera la currentRoute, que es de tipo ActivatedRouteSnapshot
    // Como tercero, el currentState, de tipo RouterStateSnapshot
    // Como cuarto, el nextState, encargado de determinar a dónde queremos ir una vez abandonemos la ruta


  }
}

