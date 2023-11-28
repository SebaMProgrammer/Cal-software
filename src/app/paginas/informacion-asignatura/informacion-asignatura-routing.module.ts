import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionAsignaturaPage } from './informacion-asignatura.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionAsignaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionAsignaturaPageRoutingModule {}
