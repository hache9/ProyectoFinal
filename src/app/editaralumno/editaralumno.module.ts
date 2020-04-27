import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaralumnoPageRoutingModule } from './editaralumno-routing.module';

import { EditaralumnoPage } from './editaralumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaralumnoPageRoutingModule
  ],
  declarations: [EditaralumnoPage]
})
export class EditaralumnoPageModule {}
