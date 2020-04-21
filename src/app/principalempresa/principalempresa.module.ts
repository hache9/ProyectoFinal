import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalempresaPageRoutingModule } from './principalempresa-routing.module';

import { PrincipalempresaPage } from './principalempresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalempresaPageRoutingModule
  ],
  declarations: [PrincipalempresaPage]
})
export class PrincipalempresaPageModule {}
