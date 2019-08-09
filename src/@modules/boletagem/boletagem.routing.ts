import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoletagemListComponent} from './list/boletagem-list.component';

const routes: Routes = [
  {
    path: 'boletagem',
    component: BoletagemListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoletagemRouting { }
