//import { AuthService } from './../myservice/AuthService';
import { ChildComponent } from './app/child/child.component';
import { ShoeComponent } from './app/shoe/shoe.component';
import { CasualComponent } from './app/casual/casual.component';
import { FormalComponent } from './app/formal/formal.component';
import { MobileComponent } from './app/mobile/mobile.component';
import { AddComponent } from './app/add/add.component';
import { AuthService } from './app/authService';
//import {Child3Component} from './child3/child3.component';
import {Route} from '@angular/router';
export const routes:Route[]=[
  
  {path:'home',component:ShoeComponent},

  {path:'shoes',component:ShoeComponent,canActivate:[AuthService],
   children:[{path:'casual',component:CasualComponent},{path:'formal',component:FormalComponent}]

},
{path:'child',component:ChildComponent},
  {
  path:'mobiles/:price',component:MobileComponent
  },
  {path:'add',
  component:AddComponent,
  outlet:'addOutlet'
}
];




// export const routes:Route[]=[
//     {
//     path:'shoes',component:ChildComponent,canActivate:[AuthService],
//     children:[{path:'sports',component:Child3Component}]
  
//   },
//     {
//     path:'mobiles/:price',component:Child2Component
//     }
//   ];
  