import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VermelhoPage } from './vermelho.page';

const routes: Routes = [
  {
    path: '',
    component: VermelhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VermelhoPageRoutingModule {}
