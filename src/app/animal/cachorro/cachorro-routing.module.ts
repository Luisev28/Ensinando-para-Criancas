import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CachorroPage } from './cachorro.page';

const routes: Routes = [
  {
    path: '',
    component: CachorroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CachorroPageRoutingModule {}
