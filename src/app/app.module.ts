import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Libraries

// Components
import { AppComponent } from './app.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JobrequestsComponent } from './company-page/jobrequests/jobrequests.component';
import { JobrequestListComponent } from './company-page/jobrequests/jobrequest-list/jobrequest-list.component';
import { JobrequestItemComponent } from './company-page/jobrequests/jobrequest-list/jobrequest-item/jobrequest-item.component';
import { JobRequestDetailComponent } from './company-page/jobrequests/job-request-detail/job-request-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CompanyPageComponent,
    AdminPageComponent,
    NavbarComponent,
    JobrequestsComponent,
    JobrequestListComponent,
    JobrequestItemComponent,
    JobRequestDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
