import { Component, OnInit } from '@angular/core';
import { JobRequestService } from './jobrequests.service';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ContractsService } from './contracts.service';
import { CompanyService } from 'src/app/admin-page/companies/companies.service';

@Component({
  selector: 'app-jobrequests',
  templateUrl: './jobrequests.component.html',
  styleUrls: ['./jobrequests.component.scss'],
  providers: [JobRequestService, ContractsService, CompanyService]
})
export class JobrequestsComponent implements OnInit {
  jobRequestForDisplay: JobRequest;
  
  constructor(private jobRequestService: JobRequestService,
    private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit(){
    this.jobRequestService.jobRequestSelected.subscribe(
        (jobRequest: JobRequest) => {
            this.jobRequestForDisplay = jobRequest;
        }
    );
    //temp PARAMETERS == TEST
    console.log(this.route.snapshot.params['companyName']);
    this.router.navigate(['/'+this.route.snapshot.params['companyName'], {outlets: {primary:[], 'listcontent':['jobrequests']}}]);
  }

}
