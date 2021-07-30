import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DezPage } from './dez.page';

const routes: Routes = [
  {
    path: '',
    component: DezPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DezPageRoutingModule {}
