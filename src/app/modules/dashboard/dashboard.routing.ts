import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './components/view/view.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path:'view',
component:ViewComponent },
{ path:'',
component:HomeComponent }
];

export const DashboardRoutes = RouterModule.forChild(routes);
