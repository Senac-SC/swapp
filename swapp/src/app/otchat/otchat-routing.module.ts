import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtchatPage } from './otchat.page';

const routes: Routes = [
  {
    path: '',
    component: OtchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtchatPageRoutingModule {}
