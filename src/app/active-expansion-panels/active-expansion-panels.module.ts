import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveExpansionPanelsComponent } from './active-expansion-panels.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from '../a/a.component';
import { BComponent } from '../b/b.component';
import { CComponent } from '../c/c.component';
import { DComponent } from '../d/d.component';

const childRoutes: Routes = [
  {
    path: '',
    component: AComponent,
    outlet: 'a',
  },
  {
    path: '',
    component: BComponent,
    outlet: 'b',
  },
  {
    path: '',
    component: CComponent,
    outlet: 'c',
  },
  {
    path: '',
    component: DComponent,
    outlet: 'd',
  },
];

@NgModule({
  declarations: [ActiveExpansionPanelsComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    RouterModule.forChild(childRoutes),
  ],
})
export class ActiveExpansionPanelsModule {}
