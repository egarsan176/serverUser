import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { ServersModule } from './servers/servers.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './AuthGuard';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { LoginModule } from './login/login.module';
import { ServersService } from './servers/servers.service';
import { HttpClientModule } from '@angular/common/http';
import { ControlUsersService } from './login/control-users.service';

//añadimos una constante de tipo Routes que contendrá todas las rutas de nuestra app
//La const contendrá un array, ya que dentro vamos a crear múltiples rutas.
// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },


//   // { path: 'users', component: UsersComponent },
//   // // { path: 'servers', component: ServersComponent },
  	
//   // { path: 'users/:id', component: UserComponent },   //segmentos dinámicos de un path
  
//     { path: 'users', component: UsersComponent, children: [
//       { path: ':id/:name', component: UserComponent },
//     ] 
//     },


//   // { path: 'nombreDelPath/:nombreDelSegmento'} --> Los dos puntos ( : ) son lo que diferencia un segmento dinámico
//   //de uno estático, nos indican que estamos ante un segmento dinámico del path.

//   //Angular cargará el UserComponent cuando escribamos cualquier cosa después de http://localhost:4200/users/
//   //Cualquer cosa después de la última / constituye ahora el parámetro id
  
//   // { path: 'users/:id/:name', component: UserComponent },



//   // //añadir un servidor, así que le añadimos un id como segmento dinámico + la parte edit
//   // { path: 'servers/:id/edit', component: EditServerComponent },

//   // 	//mostrar un único servidor en esa ruta
//   // { path: 'servers/:id', component: ServerComponent },


//   //nested routes --> qnos quedamos con la ruta principal (servers) 
//   //y convertimos servers/:id y servers/:id/edit en child routes de la principal
//   //Eliminamos la parte de servers porque la ruta principal ya nos da esa información.
//   { path: 'servers', component: ServersComponent, children: [
//     { path: ':id/edit', component: EditServerComponent },
//     { path: ':id', component: ServerComponent }
//   ] //las child routes necesitan un router-outlet independiente porque el router-outlet del app.component.html
//     //solo muestra las rutas de nivel superior y no las hijas
//   },


//   //el orden de la rutas es importante, la que es para un fallo SIEMPRE tiene que ir la última

//   { path: 'not-found', component: PageNotFoundComponent},
//   { path: '**', redirectTo: '/not-found'}

// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    ServersModule,
    LoginModule
    //RouterModule.forRoot(appRoutes) //Registramos las rutas llamando al método forRoot del RouterModule, y le pasamos nuestra const appRoutes
  ],
  providers: [ServersService, AuthGuard, AuthService, CanDeactivateGuard, ServerResolver, ControlUsersService],
  bootstrap: [AppComponent],
  exports: [ 
  ]
})
export class AppModule { }
