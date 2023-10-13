import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeeclePage } from './ideecle.page';

const routes: Routes = [
  {
    path: '',
    component: IdeeclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeeclePageRoutingModule {}
