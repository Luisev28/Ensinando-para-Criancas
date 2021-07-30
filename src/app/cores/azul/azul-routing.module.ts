import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AzulPage } from './azul.page';

const routes: Routes = [
  {
    path: '',
    component: AzulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AzulPageRoutingModule {}
