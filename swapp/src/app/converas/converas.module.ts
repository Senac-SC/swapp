import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConverasPageRoutingModule } from './converas-routing.module';

import { ConverasPage } from './converas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConverasPageRoutingModule
  ],
  declarations: [ConverasPage]
})
export class ConverasPageModule {}
