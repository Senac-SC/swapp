import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnunciadoPage } from './anunciado.page';

const routes: Routes = [
  {
    path: '',
    component: AnunciadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnunciadoPageRoutingModule {}
