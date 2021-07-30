import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoisPage } from './dois.page';

const routes: Routes = [
  {
    path: '',
    component: DoisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoisPageRoutingModule {}
