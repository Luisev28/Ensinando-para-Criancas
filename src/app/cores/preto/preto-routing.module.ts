import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PretoPage } from './preto.page';

const routes: Routes = [
  {
    path: '',
    component: PretoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PretoPageRoutingModule {}
