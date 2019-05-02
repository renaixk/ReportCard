import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule  }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { mockBackendProvider } from './helpers';


import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { HomeComponent } from './views/home';
import { LoginComponent } from './views/login';
import { ParentComponent } from './views/parent';
import { EducatorComponent } from './views/educator';
import { PrincipalComponent } from './views/principal';


import { routing } from './app.routing';
import { AlertComponent } from './components/alert';
import { from } from 'rxjs';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AuthGuard } from './gaurds';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    ParentComponent,
    EducatorComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    AngularFontAwesomeModule,
    FormsModule 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    mockBackendProvider
    //,AuthGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
