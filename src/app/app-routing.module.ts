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
  {
    path: 'mostraralumno',
    loadChildren: () => import('./mostraralumno/mostraralumno.module').then( m => m.MostraralumnoPageModule)
  },
  {
    path: 'editaralumno',
    loadChildren: () => import('./editaralumno/editaralumno.module').then( m => m.EditaralumnoPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'principaladmin',
    loadChildren: () => import('./principaladmin/principaladmin.module').then( m => m.PrincipaladminPageModule)
  },
  {
    path: 'mostraralumnosadmin',
    loadChildren: () => import('./mostraralumnosadmin/mostraralumnosadmin.module').then( m => m.MostraralumnosadminPageModule)
  },
  {
    path: 'principalalumno',
    loadChildren: () => import('./principalalumno/principalalumno.module').then( m => m.PrincipalalumnoPageModule)
  },
  {
    path: 'editaralumnoadmin',
    loadChildren: () => import('./editaralumnoadmin/editaralumnoadmin.module').then( m => m.EditaralumnoadminPageModule)
  },
  {
    path: 'mostrarempresasadmin',
    loadChildren: () => import('./mostrarempresasadmin/mostrarempresasadmin.module').then( m => m.MostrarempresasadminPageModule)
  },
  {
    path: 'mostrarempresa',
    loadChildren: () => import('./mostrarempresa/mostrarempresa.module').then( m => m.MostrarempresaPageModule)
  },
  {
    path: 'editarempresaadmin',
    loadChildren: () => import('./editarempresaadmin/editarempresaadmin.module').then( m => m.EditarempresaadminPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
