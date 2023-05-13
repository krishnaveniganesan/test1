import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';

import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path:'login',component:LoginComponent},
  { path:'dashbord', component:DashbordComponent,},
  { path:'edit/:id',component:EditComponent},
  { path:'', component:DashbordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
