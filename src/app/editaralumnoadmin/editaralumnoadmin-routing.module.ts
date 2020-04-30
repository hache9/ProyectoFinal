import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaralumnoadminPage } from './editaralumnoadmin.page';

const routes: Routes = [
  {
    path: '',
    component: EditaralumnoadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaralumnoadminPageRoutingModule {}
