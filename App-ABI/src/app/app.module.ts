import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//Device
import { Camera } from '@ionic-native/camera';
import { DeviceCameraProvider } from '../providers/device-camera/device-camera';

//Providers input
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputDinamicoComponent } from '../components/input-dinamico/input-dinamico';
import { FormDynamicComponent } from '../components/form-dynamic/form-dynamic';
import { NavbarComponent } from "../components/navbar/navbar";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InputDinamicoComponent,
    FormDynamicComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    DeviceCameraProvider
  ]
})
export class AppModule {}
