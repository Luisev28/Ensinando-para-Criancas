import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoiabaPage } from './goiaba.page';

const routes: Routes = [
  {
    path: '',
    component: GoiabaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoiabaPageRoutingModule {}
