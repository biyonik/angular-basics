import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Route, RouterModule } from '@angular/router';
import { IgxButtonModule } from 'igniteui-angular';

const home_routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(home_routes),
    IgxButtonModule
  ]
})
export class HomeModule { }
