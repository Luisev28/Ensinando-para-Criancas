import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerdeEscuroPage } from './verde-escuro.page';

const routes: Routes = [
  {
    path: '',
    component: VerdeEscuroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerdeEscuroPageRoutingModule {}
