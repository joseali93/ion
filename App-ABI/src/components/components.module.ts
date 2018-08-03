import { NgModule } from '@angular/core';
import { InputDinamicoComponent } from './input-dinamico/input-dinamico';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormDynamicComponent } from './form-dynamic/form-dynamic';
import { NavbarComponent } from './navbar/navbar';
@NgModule({
	declarations: [
    FormDynamicComponent,
    NavbarComponent],
  imports: [CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    IonicModule,
    IonicApp,
    IonicErrorHandler,
    
   ],
	exports: [
    FormDynamicComponent,
    InputDinamicoComponent,
    NavbarComponent]
})
export class ComponentsModule {}
