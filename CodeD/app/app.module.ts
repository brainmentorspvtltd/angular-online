import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoeComponent } from './shoe/shoe.component';
import { ChildComponent } from './child/child.component';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { CasualComponent } from './casual/casual.component';
import { MobileComponent } from './mobile/mobile.component';
import { FormalComponent } from './formal/formal.component';
import { AuthService } from './authService';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoeComponent,
    ChildComponent,
    CasualComponent,
    MobileComponent,
    FormalComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
