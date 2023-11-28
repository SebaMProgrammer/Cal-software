import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorhomePage } from './profesorhome.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesorhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorhomePageRoutingModule {}
