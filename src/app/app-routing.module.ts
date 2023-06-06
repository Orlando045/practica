import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';

const routes: Routes = [

  {
    path: '',
    pathMatch:'full',
    redirectTo: 'main'
  },
  {
    path:'main',
    component:MainComponent,
    children:[

    {
      path: 'menu/:id',
      component: MenuComponent
    },
    {
      path:'dashboard',
      loadChildren:()=> import('./modules/dashboard/dashboard.module').then(mod=>DashboardModule)
    }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
