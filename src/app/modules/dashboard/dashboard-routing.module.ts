import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './pages/dashbord.component';

export const routes: Routes = [
    {
        path: 'dashboard', 
        component: DashbordComponent,
        loadChildren: () => import('./router-child.module').then(m => m.RoputerChildModule)
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
