import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TlPipe } from './tl.pipe';

const pipes_routes: Route[] = [
  {
    path: '',
    component: PipesComponent
  }
]


@NgModule({
  declarations: [
    PipesComponent,
    TlPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pipes_routes)
  ]
})
export class PipesModule { }
