import { Injectable } from "@angular/core";
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

 
  loggedIn = false; //simula que el usuario no está logueado al entrar a la web

  //simularemos que el código de su interior tarda unos segundos en ejecutarse,
  //como si se conectara con un servidor. Para eso, creamos una promesa y usamos un setTimeout
  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;

    //Si la promesa se resuelve, devolverá el valor de la propiedad loggedIn.
  }
 
  //cambia el valor de la propiedad a true si el usuario está autenticado

  login(){
    this.loggedIn = true;
  }
  //devuelve a false el valor de la propiedad
  logout() {
    this.loggedIn = false;
  }
}