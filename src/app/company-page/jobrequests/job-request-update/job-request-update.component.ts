import { Component, OnInit, ViewChild } from '@angular/core';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { JobRequestService } from '../jobrequests.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, FormArray, FormGroup, FormControl } from '@angular/forms';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';
import { Company } from 'src/app/shared/company.model';
import { CompanyService } from 'src/app/admin-page/companies/companies.service';

@Component({
  selector: 'app-job-request-update',
  templateUrl: './job-request-update.component.html',
  styleUrls: ['./job-request-update.component.scss']
})
export class JobRequestUpdateComponent implements OnInit {
  jobRequestForUpdate: JobRequest;
  startDate: string;
  endDate: string;
  closedDate = null;
  currentCompany: Company;
  @ViewChild('f') updateForm: NgForm;

  constructor(private jobRequestService: JobRequestService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private adminNavbarService: AdminNavbarService,
    private router: Router) { }

  ngOnInit() {
    this.companyService.getCompanyByName(this.route.parent.snapshot.params['companyName']).subscribe(
      (company: any) => {
        this.currentCompany = company;
        this.route.params.subscribe(
          (params: Params) => {
            this.jobRequestService.getJobRequestById(this.currentCompany.id,+params['id']).subscribe(
              (jobRequest: any) => {
                this.jobRequestForUpdate = jobRequest;
              }, (error) => {
                console.log(error)
              }
            );
          }
        );
      }, (error) => {
        console.log(error)
      }
    );
  }

  updateJobRequest(){
    this.jobRequestForUpdate.description = this.updateForm.form.value.description;
    this.jobRequestForUpdate.status = this.updateForm.form.value.status;
    this.jobRequestForUpdate.startDate = this.updateForm.form.value.startDate;
    this.jobRequestForUpdate.endDate = this.updateForm.form.value.endDate;
    if(this.jobRequestForUpdate.status === "CLOSED"){
      this.jobRequestForUpdate.closedDate = new Date();
    }
    
    this.jobRequestService.updateJobRequest(this.jobRequestForUpdate).subscribe(
      (response: any) => {
        console.log(response);
        this.jobRequestService.jobRequestsChanged.emit([]);
      }, (error) => {
            console.log(error);
      }
    );
    this.router.navigate(['/'+this.jobRequestForUpdate.company.companyName, {outlets: {primary:[], 'listcontent':['jobrequests']}}]);
    this.adminNavbarService.linkChanged.emit(['Job Requests']);
  }

  private strToDate(strDate): Date{
    let day = parseInt(strDate.substring(0,2));
    let month = parseInt(strDate.substring(3,5));
    let year = parseInt(strDate.substring(6,10));

    return new Date(year,month-1, day);
  }

}
