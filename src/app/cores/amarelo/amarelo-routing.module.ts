import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmareloPage } from './amarelo.page';

const routes: Routes = [
  {
    path: '',
    component: AmareloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmareloPageRoutingModule {}
