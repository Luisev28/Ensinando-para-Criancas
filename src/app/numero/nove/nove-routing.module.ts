import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovePage } from './nove.page';

const routes: Routes = [
  {
    path: '',
    component: NovePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovePageRoutingModule {}
