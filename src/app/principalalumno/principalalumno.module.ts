import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalalumnoPageRoutingModule } from './principalalumno-routing.module';

import { PrincipalalumnoPage } from './principalalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalalumnoPageRoutingModule
  ],
  declarations: [PrincipalalumnoPage]
})
export class PrincipalalumnoPageModule {}
