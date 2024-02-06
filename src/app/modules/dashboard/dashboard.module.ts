import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './pages/dashbord.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashbordComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DashboardModule { }
