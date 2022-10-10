import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/User/authentication/authentication.component';
import { PrincipalComponent } from './components/shared/principal/principal.component';
import { HomeComponent } from './components/Home/home.component';



const routes: Routes = [
  {path:'login', component:AuthenticationComponent},
  {
    path:'', component:PrincipalComponent,
    children:[
      {path:'', component:HomeComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
