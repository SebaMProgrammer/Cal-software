import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesorhomePageRoutingModule } from './profesorhome-routing.module';

import { ProfesorhomePage } from './profesorhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesorhomePageRoutingModule
  ],
  declarations: [ProfesorhomePage]
})
export class ProfesorhomePageModule {}
