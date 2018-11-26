import { Component, OnInit, Input } from '@angular/core';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { JobRequestService } from 'src/app/company-page/jobrequests/jobrequests.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';

@Component({
  selector: 'app-company-job-requests-detail',
  templateUrl: './company-job-requests-detail.component.html',
  styleUrls: ['./company-job-requests-detail.component.scss']
})
export class CompanyJobRequestsDetailComponent implements OnInit {

  @Input() jobRequestForDisplay: JobRequest;
  constructor(private jobRequestService: JobRequestService,
    private adminNavbarService: AdminNavbarService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.jobRequestService.getJobRequestById(+params['id'],+params['jobRequestId']).subscribe(
          (jobRequest: any) => {
            this.jobRequestForDisplay = jobRequest;
            console.log(this.jobRequestForDisplay);
          }, (error) => {
            console.log(error)
          }
        );
      }
    );
  }

  deleteJobRequest(){
    this.jobRequestService.deleteJobRequest(this.jobRequestForDisplay.company.id,this.jobRequestForDisplay.id).subscribe(
      (response: any) => {
        console.log("From server:"+response);
        this.jobRequestService.jobRequestsChanged.emit([]);
      }, (error) => {
        console.log(error)
      } 
    );
    this.router.navigate(['/admin', {outlets: {primary:[], 'adminlistcontent':['companies', this.jobRequestForDisplay.company.id, 'jobrequests']}}]);
    this.adminNavbarService.linkChanged.emit([this.jobRequestForDisplay.company.companyName, 'requests']);
  }
}
