import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MamaoPage } from './mamao.page';

const routes: Routes = [
  {
    path: '',
    component: MamaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MamaoPageRoutingModule {}
