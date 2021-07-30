import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GirafaPage } from './girafa.page';

const routes: Routes = [
  {
    path: '',
    component: GirafaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GirafaPageRoutingModule {}
