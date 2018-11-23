import { Component, OnInit } from '@angular/core';
import { JobRequestService } from './jobrequests.service';
import { JobRequest } from 'src/app/shared/jobrequest.model';

@Component({
  selector: 'app-jobrequests',
  templateUrl: './jobrequests.component.html',
  styleUrls: ['./jobrequests.component.scss'],
  providers: [JobRequestService]
})
export class JobrequestsComponent implements OnInit {
  jobRequestForDisplay: JobRequest;
  
  constructor(private jobRequestService: JobRequestService) { }
  
  ngOnInit(){
    this.jobRequestService.jobRequestSelected.subscribe(
        (jobRequest: JobRequest) => {
            this.jobRequestForDisplay = jobRequest;
        }
    );
  }

}
