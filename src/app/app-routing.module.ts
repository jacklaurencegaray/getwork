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

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: ':name', 
    component: CompanyPageComponent, 
    children: [
      { path: 'jobrequests', component: JobrequestListComponent, outlet: 'listcontent'},
      { path: 'jobrequests/create', component: JobRequestCreateComponent, pathMatch: 'full' },
      { path: 'jobrequests/:id', component: JobRequestDetailComponent },
      { path: 'jobrequests/:id/update', component: JobRequestUpdateComponent, pathMatch: 'full' },
      { path: 'jobrequests/:id/contracts', component: ContractListComponent, pathMatch: 'full', outlet: 'listcontent' },
      { path: 'jobrequests/:id/contracts/:contractId', component: ContractDetailComponent, pathMatch: 'full' },
      { path: 'jobrequests/:id/contracts/:contractId/update', component: ContractUpdateComponent, pathMatch: 'full' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
