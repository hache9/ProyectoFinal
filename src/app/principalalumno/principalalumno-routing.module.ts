import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalalumnoPage } from './principalalumno.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalalumnoPageRoutingModule {}
