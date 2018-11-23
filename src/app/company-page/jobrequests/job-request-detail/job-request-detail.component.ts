import { Component, OnInit, Input } from '@angular/core';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { JobRequestService } from '../jobrequests.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-job-request-detail',
  templateUrl: './job-request-detail.component.html',
  styleUrls: ['./job-request-detail.component.scss']
})
export class JobRequestDetailComponent implements OnInit {
  @Input() jobRequestForDisplay: JobRequest;
  constructor(private jobRequestService: JobRequestService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.jobRequestForDisplay = this.jobRequestService.getJobRequestById(+params['id']);
      }
    );
  }

}
