import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConverasPage } from './converas.page';

const routes: Routes = [
  {
    path: '',
    component: ConverasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConverasPageRoutingModule {}
