import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChildComponent } from './child-component/child.component';
import { FormsModule } from '@angular/forms';
import { MyService } from './myservice.sevice';


import { AppComponent } from './app.component';
import { SalaryComponentComponent } from './salary-component/salary-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SalaryComponentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
