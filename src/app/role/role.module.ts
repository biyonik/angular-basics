import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { RoleComponent } from './role.component';

const role_routes: Route[] = [
  {
    path: '',
    component: RoleComponent
  }
]

@NgModule({
  declarations: [
    RoleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(role_routes)
  ]
})
export class RoleModule { }
