import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarempresaPage } from './mostrarempresa.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarempresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarempresaPageRoutingModule {}
