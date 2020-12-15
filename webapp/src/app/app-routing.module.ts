import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './common/main-layout/main-layout.component'
import { EmployeeIndexComponent } from './employee/pages/employee-index/employee-index.component';

const routes: Routes = [
    {
        path: '', // main application route
        component: MainLayoutComponent,
        children: [
            // default
            { path: '', component: EmployeeIndexComponent },

            // Home
            { path: 'home', component: EmployeeIndexComponent },

        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
