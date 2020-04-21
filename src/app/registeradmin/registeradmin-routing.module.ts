import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisteradminPage } from './registeradmin.page';

const routes: Routes = [
  {
    path: '',
    component: RegisteradminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisteradminPageRoutingModule {}
