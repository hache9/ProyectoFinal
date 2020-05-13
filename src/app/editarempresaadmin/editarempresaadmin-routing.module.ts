import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarempresaadminPage } from './editarempresaadmin.page';

const routes: Routes = [
  {
    path: '',
    component: EditarempresaadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarempresaadminPageRoutingModule {}
