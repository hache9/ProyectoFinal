import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarempresasadminPageRoutingModule } from './mostrarempresasadmin-routing.module';

import { MostrarempresasadminPage } from './mostrarempresasadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarempresasadminPageRoutingModule
  ],
  declarations: [MostrarempresasadminPage]
})
export class MostrarempresasadminPageModule {}
