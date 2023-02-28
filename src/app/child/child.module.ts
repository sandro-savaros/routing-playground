import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';
import { RouterModule, Routes } from '@angular/router';

const childRoutes: Routes = [
  {
    path: 'child',
    component: ChildComponent,
  }
];

@NgModule({
  declarations: [
    ChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes)
  ]
})
export class ChildModule { }
