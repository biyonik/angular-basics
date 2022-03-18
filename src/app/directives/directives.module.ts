import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { Route, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from 'src/libs';

const directive_routes: Route[] = [
  {
    path: '',
    component: DirectivesComponent
  }
];


@NgModule({
  declarations: [
    DirectivesComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(directive_routes),
    FormsModule
  ]
})
export class DirectivesModule { }
