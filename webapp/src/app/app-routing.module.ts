import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './common/main-layout/main-layout.component'
import { EmployeeIndexComponent } from './employee/pages/employee-index/employee-index.component';
import { EmployeeDetailsComponent } from './employee/pages/employee-details/employee-details.component';

const routes: Routes = [
    {
        path: '', // main application route
        component: MainLayoutComponent,
        children: [
            // default
            { path: '', component: EmployeeIndexComponent },

            { path: ':id', component: EmployeeDetailsComponent },

            // Home
            { path: 'employee', component: EmployeeIndexComponent },
            { path: 'employee/:id', component: EmployeeDetailsComponent },

        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
