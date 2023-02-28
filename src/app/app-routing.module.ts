import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './a/a.component';
import { ActiveExpansionPanelsComponent } from './active-expansion-panels/active-expansion-panels.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { DComponent } from './d/d.component';
import { ExpansionPanelsComponent } from './expansion-panels/expansion-panels.component';
import { MultipleOutletsComponent } from './multiple-outlets/multiple-outlets.component';
import { MultipleOutletsModule } from './multiple-outlets/multiple-outlets.module';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path: 'parent',
    component: ParentComponent,
    loadChildren: () =>
      import('./child/child.module').then((mod) => mod.ChildModule),
  },
  {
    path: 'multi',
    component: MultipleOutletsComponent,
    loadChildren: () =>
      import('./multiple-outlets/multiple-outlets.module').then(
        (mod) => mod.MultipleOutletsModule
      ),
  },
  {
    path: 'exp',
    component: ExpansionPanelsComponent,
    loadChildren: () =>
      import('./expansion-panels/expansion-panels.module').then(
        (mod) => mod.ExpansionPanelsModule
      ),
  },
  {
    path: 'act/:name',
    component: ActiveExpansionPanelsComponent,
    loadChildren: () =>
      import('./active-expansion-panels/active-expansion-panels.module').then(
        (mod) => mod.ActiveExpansionPanelsModule
      ),
  },
  // {
  //   path: 'act/a',
  //   component: ActiveExpansionPanelsComponent,
  //   loadChildren: () =>
  //     import('./active-expansion-panels/active-expansion-panels.module').then(
  //       (mod) => mod.ActiveExpansionPanelsModule
  //     ),
  // },
  // {
  //   path: 'act/b',
  //   component: ActiveExpansionPanelsComponent,
  //   loadChildren: () =>
  //     import('./active-expansion-panels/active-expansion-panels.module').then(
  //       (mod) => mod.ActiveExpansionPanelsModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MultipleOutletsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
