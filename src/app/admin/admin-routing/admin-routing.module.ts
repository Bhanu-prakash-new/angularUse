import {AdminDashboard2Component} from './../admin-dashboard2/admin-dashboard2.component';
import {AdminDashboard1Component} from './../admin-dashboard1/admin-dashboard1.component';
import {AdminComponent} from './../admin.component';
import {NgModule, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TablesComponent} from './../tables/tables.component';
import {LoginComponent} from './../login/login.component';
import {RecordComponent} from './../record/record.component';
import {TablesdataComponent} from './../tablesdata/tablesdata.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'admin',
                component: AdminComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'dashboard',
                        pathMatch: 'full'
                    },
                    {
                        path: 'dashboard',
                        component: AdminDashboard1Component,
                        pathMatch: 'full'
                    },
                    {
                        path: 'dashboard2',
                        component: AdminDashboard2Component,
                        pathMatch: 'full'
                    },
                    {
                        path: 'tables',
                        component: TablesComponent,
                        pathMatch: 'full'

                    },
                    {
                        path: 'records',
                        component: RecordComponent,
                        pathMatch: 'full'

                    },
                    {
                        path: 'tablesnew',
                        component: TablesdataComponent,
                        pathMatch: 'full'

                    },
                ]
            },
            {
                path:'logout',
                component: LoginComponent,
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {}
