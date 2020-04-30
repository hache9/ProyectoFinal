import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaralumnoadminPageRoutingModule } from './editaralumnoadmin-routing.module';

import { EditaralumnoadminPage } from './editaralumnoadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaralumnoadminPageRoutingModule
  ],
  declarations: [EditaralumnoadminPage]
})
export class EditaralumnoadminPageModule {}
