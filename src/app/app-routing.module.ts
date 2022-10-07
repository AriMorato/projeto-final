import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { PrincipalComponent } from './components/shared/principal/principal.component';
import { AuthenticationComponent } from './components/user/authentication/authentication.component';


const routes: Routes = [
  {path:'login', component:AuthenticationComponent},
  {
    path:'', component:PrincipalComponent,
    children:[
      {path:'', component:HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
