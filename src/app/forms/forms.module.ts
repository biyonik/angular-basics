import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const forms_routes:Route[] = [
  {
    path: '',
    component: FormsComponent
  }
]

@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(forms_routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AngularFormsModule { }
