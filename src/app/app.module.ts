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
import { JobRequestCreateComponent } from './company-page/jobrequests/job-request-create/job-request-create.component';
import { FormsModule } from '@angular/forms';
import { JobRequestUpdateComponent } from './company-page/jobrequests/job-request-update/job-request-update.component';
import { ContractListComponent } from './company-page/jobrequests/contract-list/contract-list.component';
import { ContractItemComponent } from './company-page/jobrequests/contract-list/contract-item/contract-item.component';
import { ContractDetailComponent } from './company-page/jobrequests/contract-detail/contract-detail.component';
import { ContractUpdateComponent } from './company-page/jobrequests/contract-update/contract-update.component';
import { ContractCreateComponent } from './company-page/jobrequests/contract-create/contract-create.component';
import { CompaniesComponent } from './admin-page/companies/companies.component';
import { CompanyListComponent } from './admin-page/companies/company-list/company-list.component';
import { CompanyItemComponent } from './admin-page/companies/company-list/company-item/company-item.component';
import { CompanyDetailComponent } from './admin-page/companies/company-detail/company-detail.component';
import { CompanyCreateComponent } from './admin-page/companies/company-create/company-create.component';

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
    JobRequestCreateComponent,
    JobRequestUpdateComponent,
    ContractListComponent,
    ContractItemComponent,
    ContractDetailComponent,
    ContractUpdateComponent,
    ContractCreateComponent,
    CompaniesComponent,
    CompanyListComponent,
    CompanyItemComponent,
    CompanyDetailComponent,
    CompanyCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
