import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostraralumnosadminPage } from './mostraralumnosadmin.page';

const routes: Routes = [
  {
    path: '',
    component: MostraralumnosadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostraralumnosadminPageRoutingModule {}
