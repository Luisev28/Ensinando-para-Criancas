import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuatroPage } from './quatro.page';

const routes: Routes = [
  {
    path: '',
    component: QuatroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuatroPageRoutingModule {}
