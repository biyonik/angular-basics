import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstParentComponent } from './first-parent/first-parent.component';
import { SecondParentComponent } from './second-parent/second-parent.component';
import { ChildModule } from 'src/libs';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const parent_routes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'first-parent',
        component: FirstParentComponent
      },
      {
        path: 'second-parent',
        component: SecondParentComponent
      },
      {
        path: '',
        redirectTo: 'first-parent',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [
    FirstParentComponent,
    SecondParentComponent
  ],
  imports: [
    CommonModule,
    ChildModule,
    RouterModule.forChild(parent_routes),
    FormsModule
  ]
})
export class ParentModule { }
