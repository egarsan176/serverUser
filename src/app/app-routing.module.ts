import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './AuthGuard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
// import { ServerResolver } from './servers/server/server-resolver.service';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users/users.component';

const appRoutes: Routes = [
  // { path: '', component: HomeComponent },
  
  // { path: 'users', component: UsersComponent, children: [
  //   { path: ':id/:name', component: UserComponent },] 
  // },

  // // { path: 'servers', component: ServersComponent, children: [
  // //   { path: ':id/edit', component: EditServerComponent },
  // //   { path: ':id', component: ServerComponent }] 
  // // },

  // // { path: 'servers', canActivate:[AuthGuard], component: ServersComponent, children: [
  // //     { path: ':id/edit', component: EditServerComponent },
  // //     { path: ':id', component: ServerComponent }]},

  // // { path: 'servers', canActivateChild:[AuthGuard], component: ServersComponent, children: [
  // //   { path: ':id/edit', component: EditServerComponent },
  // //   { path: ':id', component: ServerComponent }]},

  // // { path: 'servers', canActivateChild:[AuthGuard], component: ServersComponent, children: [
  // //   { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }, //Angular aplicará este guardián siempre que intentemos salir de la ruta edit
  // //   { path: ':id', component: ServerComponent }]},
  
  //   { path: 'servers', canActivateChild:[AuthGuard], component: ServersComponent, children: [
  //     { path: ':id/edit', component: EditServerComponent, 
  //     canDeactivate: [CanDeactivateGuard], 
  //     resolve: {server: ServerResolver} //esto mapeará la info que el resolver nos de
  //   }, 
  //     { path: ':id', component: ServerComponent }]},


  // //  { path: 'not-found', component: PageNotFoundComponent},
  // //  { path: '**', redirectTo: '/not-found'}
  // { path: 'login', component: LoginComponent },

  // //contiene un mensaje estático definiendo el mensaje de error
  // { path: 'not-found', component: ErrorPageComponent,  data: {message: 'Ooops! Page not found.'}},
  // { path: '**', redirectTo: '/not-found'}

  { path: '', component: HomeComponent },

  { path: 'login', component: LoginComponent },

  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent },]
  },

  { path: 'servers', component: ServersComponent, canActivate:[AuthGuard], children: [
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]},//, resolve:{server: ServerResolver} },
    { path: ':id', canActivate:[AuthGuard], component: ServerComponent }]
  },
  
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Ooops! Page not found.'}},
  { path: '**', redirectTo: '/not-found'}
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
  BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//esta clase es necesaria para poder getsionar las rutas desde el app.module.ts al principio