import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UmPage } from './um.page';

const routes: Routes = [
  {
    path: '',
    component: UmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UmPageRoutingModule {}
