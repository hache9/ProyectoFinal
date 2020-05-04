import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarempresaPageRoutingModule } from './mostrarempresa-routing.module';

import { MostrarempresaPage } from './mostrarempresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarempresaPageRoutingModule
  ],
  declarations: [MostrarempresaPage]
})
export class MostrarempresaPageModule {}
