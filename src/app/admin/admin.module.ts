import {AdminRoutingModule} from './admin-routing/admin-routing.module';
import {AdminDashboard1Component} from './admin-dashboard1/admin-dashboard1.component';
import {AdminControlSidebarComponent} from './admin-control-sidebar/admin-control-sidebar.component';
import {AdminFooterComponent} from './admin-footer/admin-footer.component';
import {AdminContentComponent} from './admin-content/admin-content.component';
import {AdminLeftSideComponent} from './admin-left-side/admin-left-side.component';
import {AdminHeaderComponent} from './admin-header/admin-header.component';
import {AdminComponent} from './admin.component';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminDashboard2Component} from './admin-dashboard2/admin-dashboard2.component';
import {LoginComponent} from './login/login.component';
import {TablesComponent} from './tables/tables.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecordComponent} from './record/record.component';
import {TablesdataComponent} from './tablesdata/tablesdata.component';
import {DropdownModule} from "ngx-dropdown";
import {MyDatePickerModule} from 'mydatepicker';
import {ModalComponent} from './modal/modal.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        DropdownModule,
        MyDatePickerModule
    ],
    declarations: [
        AdminComponent,
        AdminHeaderComponent,
        AdminLeftSideComponent,
        AdminContentComponent,
        AdminFooterComponent,
        AdminControlSidebarComponent,
        AdminDashboard1Component,
        AdminDashboard2Component,
        LoginComponent,
        TablesComponent,
        RecordComponent,
        TablesdataComponent,
        ModalComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

    exports: [AdminComponent],
    providers: [],
    entryComponents: [
        ModalComponent,
    ]
})
export class AdminModule {}
