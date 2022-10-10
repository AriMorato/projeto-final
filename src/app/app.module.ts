import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/User/authentication/authentication.component';
import { PrincipalComponent } from './components/shared/principal/principal.component';
import { HomeComponent } from './components/Home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    PrincipalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
