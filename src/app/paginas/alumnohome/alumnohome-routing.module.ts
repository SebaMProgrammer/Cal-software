import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnohomePage } from './alumnohome.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnohomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnohomePageRoutingModule {}
