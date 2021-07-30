import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrutLaranjaPage } from './frut-laranja.page';

const routes: Routes = [
  {
    path: '',
    component: FrutLaranjaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrutLaranjaPageRoutingModule {}
