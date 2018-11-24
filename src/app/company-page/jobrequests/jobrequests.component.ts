import { Component, OnInit } from '@angular/core';
import { JobRequestService } from './jobrequests.service';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { Router } from '@angular/router';
import { ContractsService } from './contracts.service';

@Component({
  selector: 'app-jobrequests',
  templateUrl: './jobrequests.component.html',
  styleUrls: ['./jobrequests.component.scss'],
  providers: [JobRequestService, ContractsService]
})
export class JobrequestsComponent implements OnInit {
  jobRequestForDisplay: JobRequest;
  
  constructor(private jobRequestService: JobRequestService,
    private router: Router) { }
  
  ngOnInit(){
    this.jobRequestService.jobRequestSelected.subscribe(
        (jobRequest: JobRequest) => {
            this.jobRequestForDisplay = jobRequest;
        }
    );
    this.router.navigate(['/test', {outlets: {primary:[], 'listcontent':['jobrequests']}}]);
  }

}
