import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BananaPage } from './banana.page';

const routes: Routes = [
  {
    path: '',
    component: BananaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BananaPageRoutingModule {}
