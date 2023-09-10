import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './modules/shared/shared.module';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AuthGuard} from "./modules/shared/guards/auth.guard";
import {NgApexchartsModule} from "ng-apexcharts";
import {CookieService} from "ngx-cookie-service";
import {MatButtonModule} from "@angular/material/button";
import {LoadingComponent} from './components/loading/loading.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpManagerInterceptor} from "./modules/shared/interceptors/http-manager.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgApexchartsModule,
    MatButtonModule,
    MatProgressSpinnerModule

  ],
  providers: [
    CookieService,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: HttpManagerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
