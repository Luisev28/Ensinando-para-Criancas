import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MelanciaPage } from './melancia.page';

const routes: Routes = [
  {
    path: '',
    component: MelanciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MelanciaPageRoutingModule {}
