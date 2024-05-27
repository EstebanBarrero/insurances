import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent} from './views/login/login.component';
import { DashboardComponent} from './views/dashboard/dashboard.component';
import { TestingComponent} from './views/testing/testing.component';
import { MyDataComponent} from './views/my-data/my-data.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard', pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'testing',
    component: TestingComponent
  },
  {
    path:'myData',
    component: MyDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent, TestingComponent, MyDataComponent]
