
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


  login(email:string, password:string){

    const url = `${this.baseUrl}/auth/login`;

    const body = {
      'email': email,
      'password': password
    }

    return this.http.post(url, body);
  }

  //recuperamos el token que teníamos almacenado en el localStorage
  getToken(){
    return JSON.parse(<string>localStorage.getItem("token"));
  }


}