import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutes } from './dashboard.routing';
import { ViewComponent } from './components/view/view.component';
import { HomeComponent } from './components/home/home.component';
import { DatosComponent } from 'src/app/datos/datos.component';
import { TablaComponent } from 'src/app/tabla/tabla.component';



@NgModule({
  declarations: [
    ViewComponent,
    HomeComponent,
    DatosComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutes
  ]
})
export class DashboardModule { }
