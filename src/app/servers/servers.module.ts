import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../AuthGuard';



@NgModule({
  declarations: [
    ServersComponent,
    ServerComponent,
    EditServerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ServersComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class ServersModule { }
