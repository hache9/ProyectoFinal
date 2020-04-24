import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//importamos firebaseconfig que es la variable y AngularFireModule.
import { firebaseConfig } from './../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFirestoreModule } from '@angular/fire/firestore';

import { GaleryComponent } from './galery/galery.component';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { AngularFireStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [AppComponent, GaleryComponent],
  entryComponents: [GaleryComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
    //Iniciar la app con firebase
    AngularFireModule.initializeApp(firebaseConfig),
    //Autentificar(utilizar modulo de autenticación)
    AngularFireAuthModule,
    AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    GaleryComponent,
    AngularFireStorage,
    ImagePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
