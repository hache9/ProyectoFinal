import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostraralumnoPage } from './mostraralumno.page';

const routes: Routes = [
  {
    path: '',
    component: MostraralumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostraralumnoPageRoutingModule {}
