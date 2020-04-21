import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisteralumnoPage } from './registeralumno.page';

const routes: Routes = [
  {
    path: '',
    component: RegisteralumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisteralumnoPageRoutingModule {}
