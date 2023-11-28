import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profesorhome',
    loadChildren: () => import('./paginas/profesorhome/profesorhome.module').then( m => m.ProfesorhomePageModule)
  },
  {
    path: 'alumnohome',
    loadChildren: () => import('./paginas/alumnohome/alumnohome.module').then( m => m.AlumnohomePageModule)
  },
  {
    path: 'informacion-asignatura',
    loadChildren: () => import('./paginas/informacion-asignatura/informacion-asignatura.module').then( m => m.InformacionAsignaturaPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./paginas/qr/qr.module').then( m => m.QrPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
