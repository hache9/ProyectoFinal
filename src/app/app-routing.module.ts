import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },  {
    path: 'registeradmin',
    loadChildren: () => import('./registeradmin/registeradmin.module').then( m => m.RegisteradminPageModule)
  },
  {
    path: 'registerempresa',
    loadChildren: () => import('./registerempresa/registerempresa.module').then( m => m.RegisterempresaPageModule)
  },
  {
    path: 'registeralumno',
    loadChildren: () => import('./registeralumno/registeralumno.module').then( m => m.RegisteralumnoPageModule)
  },
  {
    path: 'principalempresa',
    loadChildren: () => import('./principalempresa/principalempresa.module').then( m => m.PrincipalempresaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
