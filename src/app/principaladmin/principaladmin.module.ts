import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipaladminPageRoutingModule } from './principaladmin-routing.module';

import { PrincipaladminPage } from './principaladmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipaladminPageRoutingModule
  ],
  declarations: [PrincipaladminPage]
})
export class PrincipaladminPageModule {}
