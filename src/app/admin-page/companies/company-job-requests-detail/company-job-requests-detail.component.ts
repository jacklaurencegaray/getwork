import { Component, OnInit, Input } from '@angular/core';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { JobRequestService } from 'src/app/company-page/jobrequests/jobrequests.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-company-job-requests-detail',
  templateUrl: './company-job-requests-detail.component.html',
  styleUrls: ['./company-job-requests-detail.component.scss']
})
export class CompanyJobRequestsDetailComponent implements OnInit {

  @Input() jobRequestForDisplay: JobRequest;
  constructor(private jobRequestService: JobRequestService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.jobRequestForDisplay = this.jobRequestService.getJobRequestById(+params['jobRequestId']);
      }
    );
  }

  deleteJobRequest(){
    this.jobRequestService.deleteJobRequest(this.jobRequestForDisplay.id);
    this.router.navigate(['/admin', {outlets: {primary:[], 'adminlistcontent':['companies', this.jobRequestForDisplay.companyId, 'jobrequests']}}]);
  }
}
