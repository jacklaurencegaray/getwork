import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './authentication/register/register.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { JobRequestDetailComponent } from './company-page/jobrequests/job-request-detail/job-request-detail.component';
import { JobRequestCreateComponent } from './company-page/jobrequests/job-request-create/job-request-create.component';
import { JobRequestUpdateComponent } from './company-page/jobrequests/job-request-update/job-request-update.component';
import { JobrequestListComponent } from './company-page/jobrequests/jobrequest-list/jobrequest-list.component';
import { ContractListComponent } from './company-page/jobrequests/contract-list/contract-list.component';
import { ContractDetailComponent } from './company-page/jobrequests/contract-detail/contract-detail.component';
import { ContractUpdateComponent } from './company-page/jobrequests/contract-update/contract-update.component';
import { ContractCreateComponent } from './company-page/jobrequests/contract-create/contract-create.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CompanyListComponent } from './admin-page/companies/company-list/company-list.component';
import { CompanyDetailComponent } from './admin-page/companies/company-detail/company-detail.component';
import { CompanyCreateComponent } from './admin-page/companies/company-create/company-create.component';
import { CompanyUpdateComponent } from './admin-page/companies/company-update/company-update.component';
import { CompanyJobRequestsListComponent } from './admin-page/companies/company-job-requests-list/company-job-requests-list.component';
import { CompanyJobRequestsDetailComponent } from './admin-page/companies/company-job-requests-detail/company-job-requests-detail.component';
import { CompanyContractListComponent } from './admin-page/companies/company-contract-list/company-contract-list.component';
import { CompanyContractDetailComponent } from './admin-page/companies/company-contract-detail/company-contract-detail.component';
import { CompanyContractUpdateComponent } from './admin-page/companies/company-contract-update/company-contract-update.component';
import { CompanyJobRequestUpdateComponent } from './admin-page/companies/company-job-request-update/company-job-request-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [
      { path: 'companies', component: CompanyListComponent, outlet: 'adminlistcontent' },
      { path: 'companies/create', component: CompanyCreateComponent },
      { path: 'companies/:id', component: CompanyDetailComponent },
      { path: 'companies/:id/update', component: CompanyUpdateComponent, pathMatch: 'full' },
      { path: 'companies/:id/jobrequests', component: CompanyJobRequestsListComponent, pathMatch: 'full', outlet: 'adminlistcontent' },
      { path: 'companies/:id/jobrequests/:jobRequestId', component: CompanyJobRequestsDetailComponent, pathMatch: 'full' },
      { path: 'companies/:id/jobrequests/:jobRequestId/update', component: CompanyJobRequestUpdateComponent, pathMatch: 'full' },
      { path: 'companies/:id/jobrequests/:jobRequestId/contracts', component: CompanyContractListComponent, pathMatch: 'full', outlet: 'adminlistcontent' },
      { path: 'companies/:id/jobrequests/:jobRequestId/contracts/:contractId', component: CompanyContractDetailComponent, pathMatch: 'full' },
      { path: 'companies/:id/jobrequests/:jobRequestId/contracts/:contractId/update', component: CompanyContractUpdateComponent, pathMatch: 'full' },
    ]
  },
  {
    path: ':companyName',
    component: CompanyPageComponent,
    children: [
      { path: 'jobrequests', component: JobrequestListComponent, outlet: 'listcontent' },
      { path: 'jobrequests/create', component: JobRequestCreateComponent, pathMatch: 'full' },
      { path: 'jobrequests/:id', component: JobRequestDetailComponent },
      { path: 'jobrequests/:id/contracts/create', component: ContractCreateComponent, pathMatch: 'full' },
      { path: 'jobrequests/:id/update', component: JobRequestUpdateComponent, pathMatch: 'full' },
      { path: 'jobrequests/:id/contracts', component: ContractListComponent, pathMatch: 'full', outlet: 'listcontent' },
      { path: 'jobrequests/:id/contracts/:contractId', component: ContractDetailComponent, pathMatch: 'full' },
      { path: 'jobrequests/:id/contracts/:contractId/update', component: ContractUpdateComponent, pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: '/login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
