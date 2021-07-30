import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MacaPage } from './maca.page';

const routes: Routes = [
  {
    path: '',
    component: MacaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MacaPageRoutingModule {}
