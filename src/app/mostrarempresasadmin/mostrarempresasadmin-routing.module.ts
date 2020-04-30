import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarempresasadminPage } from './mostrarempresasadmin.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarempresasadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarempresasadminPageRoutingModule {}
