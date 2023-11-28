import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionAsignaturaPageRoutingModule } from './informacion-asignatura-routing.module';

import { InformacionAsignaturaPage } from './informacion-asignatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionAsignaturaPageRoutingModule
  ],
  declarations: [InformacionAsignaturaPage]
})
export class InformacionAsignaturaPageModule {}
