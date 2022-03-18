import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const data_binding_routes: Route[] = [
  {
    path: '',
    component: DataBindingComponent
  }
]

@NgModule({
  declarations: [
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(data_binding_routes),
    FormsModule
  ]
})
export class DataBindingModule { }
