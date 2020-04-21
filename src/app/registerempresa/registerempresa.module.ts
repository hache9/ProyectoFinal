import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterempresaPageRoutingModule } from './registerempresa-routing.module';

import { RegisterempresaPage } from './registerempresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterempresaPageRoutingModule
  ],
  declarations: [RegisterempresaPage]
})
export class RegisterempresaPageModule {}
