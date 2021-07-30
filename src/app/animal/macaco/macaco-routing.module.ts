import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MacacoPage } from './macaco.page';

const routes: Routes = [
  {
    path: '',
    component: MacacoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MacacoPageRoutingModule {}
