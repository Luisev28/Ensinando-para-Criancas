import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbacaxiPage } from './abacaxi.page';

const routes: Routes = [
  {
    path: '',
    component: AbacaxiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbacaxiPageRoutingModule {}
