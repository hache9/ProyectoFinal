import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostraralumnosadminPageRoutingModule } from './mostraralumnosadmin-routing.module';

import { MostraralumnosadminPage } from './mostraralumnosadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostraralumnosadminPageRoutingModule
  ],
  declarations: [MostraralumnosadminPage]
})
export class MostraralumnosadminPageModule {}
