import { Component, OnInit, Input } from '@angular/core';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { JobRequestService } from '../jobrequests.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-job-request-detail',
  templateUrl: './job-request-detail.component.html',
  styleUrls: ['./job-request-detail.component.scss']
})
export class JobRequestDetailComponent implements OnInit {
  @Input() jobRequestForDisplay: JobRequest;
  constructor(private jobRequestService: JobRequestService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        // the passed parameters are just TESTS
        this.jobRequestService.getJobRequestById('wakanda',1,+params['id']).subscribe(
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
    //this.jobRequestService.deleteJobRequest(this.jobRequestForDisplay.id);
    //this.router.navigate(['/test', {outlets: {primary:[], 'listcontent':['jobrequests']}}]);
  }

}
