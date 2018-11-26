import { Component, OnInit, Input } from '@angular/core';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { JobRequestService } from 'src/app/company-page/jobrequests/jobrequests.service';
import { Route, ActivatedRoute, Params } from '@angular/router';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';
import { CompanyService } from '../companies.service';
import { Company } from 'src/app/shared/company.model';

@Component({
  selector: 'app-company-job-requests-list',
  templateUrl: './company-job-requests-list.component.html',
  styleUrls: ['./company-job-requests-list.component.scss']
})
export class CompanyJobRequestsListComponent implements OnInit {

  jobRequests: JobRequest[];
  currentCompanyId: number;
  constructor(private jobRequestService: JobRequestService,
    private adminNavbarService: AdminNavbarService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentCompanyId = this.route.snapshot.params['id'];
    this.jobRequestService.jobRequestsChanged.subscribe(
      (jobRequests: JobRequest[]) => {
        this.jobRequestService.getJobRequests(this.currentCompanyId).subscribe(
          (jobRequests: any[]) => {
            this.jobRequests = jobRequests.slice();
          }, (error) => {
          console.log(error)
        }
        );
      }
    );
    
    this.jobRequestService.getJobRequests(
      this.currentCompanyId)
      .subscribe(
        (jobRequests: any[]) => {
          this.jobRequests = jobRequests.slice();
        }, (error) => {
          console.log(error)
        }
      );

    this.adminNavbarService.linkChanged.emit(['sample name', 'requests']);
  }
}
