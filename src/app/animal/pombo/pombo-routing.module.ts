import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PomboPage } from './pombo.page';

const routes: Routes = [
  {
    path: '',
    component: PomboPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PomboPageRoutingModule {}
