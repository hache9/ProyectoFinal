import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisteradminPageRoutingModule } from './registeradmin-routing.module';

import { RegisteradminPage } from './registeradmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisteradminPageRoutingModule
  ],
  declarations: [RegisteradminPage]
})
export class RegisteradminPageModule {}
