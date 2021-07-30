import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LimaoPage } from './limao.page';

const routes: Routes = [
  {
    path: '',
    component: LimaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LimaoPageRoutingModule {}
