import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnunciadoPageRoutingModule } from './anunciado-routing.module';

import { AnunciadoPage } from './anunciado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnunciadoPageRoutingModule
  ],
  declarations: [AnunciadoPage]
})
export class AnunciadoPageModule {}
