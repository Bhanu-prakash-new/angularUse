import {AdminModule} from './admin/admin.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {StarterComponent} from './starter/starter.component';
import {StarterHeaderComponent} from './starter/starter-header/starter-header.component';
import {StarterLeftSideComponent} from './starter/starter-left-side/starter-left-side.component';
import {StarterContentComponent} from './starter/starter-content/starter-content.component';
import {StarterFooterComponent} from './starter/starter-footer/starter-footer.component';
import {StarterControlSidebarComponent} from './starter/starter-control-sidebar/starter-control-sidebar.component';
import {AdminComponent} from './admin/admin.component';
import {AdminHeaderComponent} from './admin/admin-header/admin-header.component';
import {AdminLeftSideComponent} from './admin/admin-left-side/admin-left-side.component';
import {AdminContentComponent} from './admin/admin-content/admin-content.component';
import {AdminFooterComponent} from './admin/admin-footer/admin-footer.component';
import {AdminControlSidebarComponent} from './admin/admin-control-sidebar/admin-control-sidebar.component';
import {AdminDashboard1Component} from './admin/admin-dashboard1/admin-dashboard1.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ittpCommonService} from './httpservice.service';
import {HttpModule} from '@angular/http';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';

import {TableserviceService} from '../app/admin/tables/tableservice.service';

import {ModalDialogModule} from 'ngx-modal-dialog';
import { MyDatePickerModule } from 'mydatepicker';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DropdownModule} from "ngx-dropdown";
//import {SocialLoginModule, AuthServiceConfig} from "angular4-social-login";
//import {GoogleLoginProvider, FacebookLoginProvider} from "angular4-social-login";

//let configer = new AuthServiceConfig([
//    {
//        id: GoogleLoginProvider.PROVIDER_ID,
//        provider: new GoogleLoginProvider("607333235844-0l5j9bh73pdqphflnacqj4a06smen1ia.apps.googleusercontent.com")
//    },
////    {
////        id: FacebookLoginProvider.PROVIDER_ID,
////        provider: new FacebookLoginProvider("Facebook-App-Id")
////    }
//]);
const config: SocketIoConfig = {url: 'http://192.168.1.234:3000', options: {}};
@NgModule({
    declarations: [
        AppComponent,
        StarterComponent,
        StarterHeaderComponent,
        StarterLeftSideComponent,
        StarterContentComponent,
        StarterFooterComponent,
        StarterControlSidebarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminModule,
        FormsModule,
        HttpModule,
        MyDatePickerModule,
        FormsModule,
        NgbModule.forRoot(),
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 1000,
            preventDuplicates: true,
        }),
        SocketIoModule.forRoot(config),
        ModalDialogModule.forRoot(),
        DropdownModule
        //        SocialLoginModule.initialize(configer)
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    entryComponents: [],
    providers: [ittpCommonService, TableserviceService],
    bootstrap: [AppComponent]
})
export class AppModule {}
