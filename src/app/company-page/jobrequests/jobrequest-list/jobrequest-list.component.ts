import { Component, OnInit } from '@angular/core';
import { JobRequestService } from '../jobrequests.service';
import { JobRequest } from 'src/app/shared/jobrequest.model';

@Component({
  selector: 'app-jobrequest-list',
  templateUrl: './jobrequest-list.component.html',
  styleUrls: ['./jobrequest-list.component.scss']
})
export class JobrequestListComponent implements OnInit {
  jobRequests: JobRequest[];
  constructor(private jobRequestService: JobRequestService) { }

  ngOnInit() {
    this.jobRequests = this.jobRequestService.getJobRequests();
    this.jobRequestService.newJobAdded.subscribe(
      (jobRequest: JobRequest) => {
        this.jobRequests.push(jobRequest);
      }
    );
  }

}
