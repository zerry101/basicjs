import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthGuard } from './auth/auth.guard';
import { UnauthGuard } from './auth/unauth.guard';

import { DEFAULT_TIMEOUT } from './services/http-interceptors/timeout.inteceptor';
import { httpInterceptorProviders } from './services/http-interceptors';
import { File } from '@ionic-native/file/ngx'
import { FileTransfer, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { Printer } from '@awesome-cordova-plugins/printer/ngx';
import { HomePageModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HomePageModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: DEFAULT_TIMEOUT, useValue: 15000 },
    httpInterceptorProviders,
    AuthGuard,
    UnauthGuard,
    FileTransfer, FileTransferObject, File, FileOpener, Printer
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
