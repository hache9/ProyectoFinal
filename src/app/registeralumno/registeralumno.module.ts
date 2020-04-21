import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisteralumnoPageRoutingModule } from './registeralumno-routing.module';

import { RegisteralumnoPage } from './registeralumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisteralumnoPageRoutingModule
  ],
  declarations: [RegisteralumnoPage]
})
export class RegisteralumnoPageModule {}
