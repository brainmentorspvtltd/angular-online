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

@NgModule({
  declarations: [
    AppComponent,
    ShoeComponent,
    ChildComponent,
    CasualComponent,
    MobileComponent,
    FormalComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
