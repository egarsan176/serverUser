import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Server } from "./interfaces/server.interface";

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  private baseUrl: string = environment.baseUrl;

  // private servers: Server[]  = [
  //   {
  //     id: 1,
  //     name: 'Productionserver',
  //     status: 'online'
  //   },
  //   {
  //     id: 2,
  //     name: 'Testserver',
  //     status: 'offline'
  //   },
  //   {
  //     id: 3,
  //     name: 'Devserver',
  //     status: 'offline'
  //   }
  // ];

  constructor(private http:HttpClient) { }
  // getServers(): Server[] {
  //   return this.servers;
  // }

  // getServer(id: number) : Server {
  //   const server = this.servers.find(
  //     (s) => {
  //       return s.id === id;
  //     }
  //   );
  //   return <Server>server; //hago un casting para asegurarme que lo que devuelve es de tipo server
  // }

  // updateServer(id: number, serverInfo: {name: string, status: string}) {
  //   const server = this.servers.find(
  //     (s) => {
  //       return s.id === id;
  //     }
  //   );
  //   if (server) {
  //     server.name = serverInfo.name;
  //     server.status = serverInfo.status;
  //   }
  // }

  //hago una petición en la que si el token existe y es válido se carga la lista de servidores
  getServers(){
    let token = JSON.parse(<string>localStorage.getItem('token')).access_token;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    const options = {
      headers: headers
    }

    const url = `${this.baseUrl}/servers`;
    return this.http.get<Server[]>(url,options);
  }
}