import { Observable } from "rxjs";

//el componente que la exporte debe tener un método llamado canDeactivate,
//cuyo tipo será una función que devuelva un observable, una promesa o un boolean
export interface CanComponentDeactivate {

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}