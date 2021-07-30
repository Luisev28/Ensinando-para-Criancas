import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaranjaPage } from './laranja.page';

const routes: Routes = [
  {
    path: '',
    component: LaranjaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaranjaPageRoutingModule {}
