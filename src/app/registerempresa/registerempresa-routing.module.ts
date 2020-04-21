import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterempresaPage } from './registerempresa.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterempresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterempresaPageRoutingModule {}
