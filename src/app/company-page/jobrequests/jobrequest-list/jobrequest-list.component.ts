import { Component, OnInit } from '@angular/core';
import { JobRequestService } from '../jobrequests.service';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';

@Component({
  selector: 'app-jobrequest-list',
  templateUrl: './jobrequest-list.component.html',
  styleUrls: ['./jobrequest-list.component.scss']
})
export class JobrequestListComponent implements OnInit {
  jobRequests: JobRequest[];
  constructor(private jobRequestService: JobRequestService,
    private adminNavbarService: AdminNavbarService) { }

  ngOnInit() {
    this.jobRequests = this.jobRequestService.getJobRequests();
    this.jobRequestService.jobRequestsChanged.subscribe(
      (jobRequests: JobRequest[]) => {
        this.jobRequests = jobRequests.slice();
      }
    );
  }

  onCreate(){
    this.adminNavbarService.linkChanged.emit(['Job Requests']);
  }

}
