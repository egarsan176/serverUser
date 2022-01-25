
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ControlUsersService {

    //la url a la que hacer la petición
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  //haces una peticion a esa url con ese body
  login(email:string, password:string){

    const url = `${this.baseUrl}/auth/login`;

    const body = {
      'email': email,
      'password': password
    }
    //te devuelve la respuesta de la petición 
    return this.http.post(url, body);
  }

  //recuperamos el token que teníamos almacenado en el localStorage
  getToken(){
    return JSON.parse(<string>localStorage.getItem("token"));
  }

  //borro el token al cerrar sesión para no poder acceder de nuevo
  logout(){
    localStorage.removeItem("token");
  }


}