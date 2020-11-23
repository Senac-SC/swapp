import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtchatPageRoutingModule } from './otchat-routing.module';

import { OtchatPage } from './otchat.page';

import {AutosizeModule} from 'ngx-autosize';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtchatPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: OtchatPage
      }
    ]),
    AutosizeModule
  ],
  declarations: [OtchatPage]
})

export class OtchatPageModule {}
