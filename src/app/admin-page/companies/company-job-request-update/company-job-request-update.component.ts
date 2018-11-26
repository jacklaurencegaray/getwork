import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { JobRequestService } from 'src/app/company-page/jobrequests/jobrequests.service';
import { NgForm } from '@angular/forms';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';
import { JobRequest } from 'src/app/shared/jobrequest.model';

@Component({
  selector: 'app-company-job-request-update',
  templateUrl: './company-job-request-update.component.html',
  styleUrls: ['./company-job-request-update.component.scss']
})
export class CompanyJobRequestUpdateComponent implements OnInit {

  jobRequestForUpdate: JobRequest;
  closedDate = null;
  @ViewChild('f') updateForm: NgForm;

  constructor(private jobRequestService: JobRequestService,
    private route: ActivatedRoute,
    private adminNavbarService: AdminNavbarService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.jobRequestService.getJobRequestById(+params['id'],+params['jobRequestId']).subscribe(
          (jobRequest: any) => {
            this.jobRequestForUpdate = jobRequest;
          }, (error) => {
            console.log(error)
          }
        );
      }
    );
  }

  updateJobRequest(){
    this.jobRequestForUpdate.description = this.updateForm.form.value.description;
    this.jobRequestForUpdate.status = this.updateForm.form.value.status;
    this.jobRequestForUpdate.startDate = this.updateForm.form.value.startDate;
    this.jobRequestForUpdate.endDate = this.updateForm.form.value.endDate;
    this.jobRequestForUpdate.closedDate = this.closedDate;
    
    this.jobRequestService.updateJobRequest(this.jobRequestForUpdate).subscribe(
      (response: any) => {
        console.log(response);
        this.jobRequestService.jobRequestsChanged.emit([]);
      }, (error) => {
            console.log(error);
      }
    );
    this.router.navigate(['/admin', {outlets: {primary:[], 'adminlistcontent':['companies', +this.route.snapshot.params['id'], 'jobrequests']}}]);
    this.adminNavbarService.linkChanged.emit([this.jobRequestForUpdate.company.companyName, 'Job Requests']);
  }
}
