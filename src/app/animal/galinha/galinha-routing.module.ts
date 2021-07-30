import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalinhaPage } from './galinha.page';

const routes: Routes = [
  {
    path: '',
    component: GalinhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalinhaPageRoutingModule {}
