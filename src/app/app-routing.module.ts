import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './authentication/register/register.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { JobRequestDetailComponent } from './company-page/jobrequests/job-request-detail/job-request-detail.component';
import { JobRequestCreateComponent } from './company-page/jobrequests/job-request-create/job-request-create.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: ':name', 
    component: CompanyPageComponent, 
    children: [
      { path: 'jobrequests/create', component: JobRequestCreateComponent, pathMatch: 'full' },
      { path: 'jobrequests/:id', component: JobRequestDetailComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
