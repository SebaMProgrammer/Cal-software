import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnohomePageRoutingModule } from './alumnohome-routing.module';

import { AlumnohomePage } from './alumnohome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnohomePageRoutingModule
  ],
  declarations: [AlumnohomePage]
})
export class AlumnohomePageModule {}
