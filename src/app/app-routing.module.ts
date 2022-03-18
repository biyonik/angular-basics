import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'role',
    loadChildren: () => import('./role/role.module').then(module => module.RoleModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(module => module.UserModule)
  },
  {
    path:'data-binding',
    loadChildren: () => import('./data-binding/data-binding.module').then(module => module.DataBindingModule)
  },
  {
    path: 'storage',
    loadChildren: () => import('./storage/storage.module').then(module => module.StorageModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then(module => module.DirectivesModule)
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then(module => module.PipesModule)
  },
  {
    path: 'parent',
    loadChildren: () => import('./parent/parent.module').then(module => module.ParentModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then(module => module.AngularFormsModule)
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
