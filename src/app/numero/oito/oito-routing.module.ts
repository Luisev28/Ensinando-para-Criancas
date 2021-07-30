import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OitoPage } from './oito.page';

const routes: Routes = [
  {
    path: '',
    component: OitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OitoPageRoutingModule {}
