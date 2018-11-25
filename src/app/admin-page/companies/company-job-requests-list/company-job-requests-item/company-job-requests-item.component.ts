import { Component, OnInit, Input } from '@angular/core';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { JobRequestService } from 'src/app/company-page/jobrequests/jobrequests.service';

@Component({
  selector: 'app-company-job-requests-item',
  templateUrl: './company-job-requests-item.component.html',
  styleUrls: ['./company-job-requests-item.component.scss']
})
export class CompanyJobRequestsItemComponent implements OnInit {

  @Input('jrElement') jr: JobRequest;
  constructor(private jobRequestService: JobRequestService) { }

  ngOnInit() {
  }

  onJobRequestSelected(){
    this.jobRequestService.jobRequestSelected.emit(this.jr);
  }

}
