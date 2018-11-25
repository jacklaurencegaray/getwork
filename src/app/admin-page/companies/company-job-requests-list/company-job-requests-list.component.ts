import { Component, OnInit, Input } from '@angular/core';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { JobRequestService } from 'src/app/company-page/jobrequests/jobrequests.service';
import { Route, ActivatedRoute, Params } from '@angular/router';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';

@Component({
  selector: 'app-company-job-requests-list',
  templateUrl: './company-job-requests-list.component.html',
  styleUrls: ['./company-job-requests-list.component.scss']
})
export class CompanyJobRequestsListComponent implements OnInit {

  jobRequests: JobRequest[];
  jr_id;
  constructor(private jobRequestService: JobRequestService,
    private adminNavbarService: AdminNavbarService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.jr_id = +this.route.snapshot.params['id'];
    console.log(this.jr_id);
    this.route.params.subscribe(
      (params: Params) => {
        this.jobRequests = this.jobRequestService.getJobRequestsByCompanyId(+params['id']);
      }
    );

    this.jobRequestService.jobRequestsChanged.subscribe(
      (jobRequests: JobRequest[]) => {
        let company_id = +this.route.snapshot.params['id'];
        console.log(company_id);
        this.jobRequests = this.jobRequestService.getJobRequestsByCompanyId(company_id);
      }
    );

    this.adminNavbarService.linkChanged.emit(['sample name', 'requests']);
  }
}
