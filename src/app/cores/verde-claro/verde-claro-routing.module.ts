import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerdeClaroPage } from './verde-claro.page';

const routes: Routes = [
  {
    path: '',
    component: VerdeClaroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerdeClaroPageRoutingModule {}
