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
import { CompanyUpdateComponent } from './admin-page/companies/company-update/company-update.component';
import { CompanyJobRequestsListComponent } from './admin-page/companies/company-job-requests-list/company-job-requests-list.component';
import { CompanyJobRequestsItemComponent } from './admin-page/companies/company-job-requests-list/company-job-requests-item/company-job-requests-item.component';
import { CompanyJobRequestsDetailComponent } from './admin-page/companies/company-job-requests-detail/company-job-requests-detail.component';
import { CompanyContractListComponent } from './admin-page/companies/company-contract-list/company-contract-list.component';
import { CompanyContractItemComponent } from './admin-page/companies/company-contract-list/company-contract-item/company-contract-item.component';
import { CompanyContractDetailComponent } from './admin-page/companies/company-contract-detail/company-contract-detail.component';
import { CompanyContractUpdateComponent } from './admin-page/companies/company-contract-update/company-contract-update.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';

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
    CompanyUpdateComponent,
    CompanyJobRequestsListComponent,
    CompanyJobRequestsItemComponent,
    CompanyJobRequestsDetailComponent,
    CompanyContractListComponent,
    CompanyContractItemComponent,
    CompanyContractDetailComponent,
    CompanyContractUpdateComponent,
    AdminNavbarComponent,
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
