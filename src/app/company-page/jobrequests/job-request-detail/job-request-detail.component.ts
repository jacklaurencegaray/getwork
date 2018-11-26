import { Component, OnInit, Input } from '@angular/core';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { JobRequestService } from '../jobrequests.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';

@Component({
  selector: 'app-job-request-detail',
  templateUrl: './job-request-detail.component.html',
  styleUrls: ['./job-request-detail.component.scss']
})
export class JobRequestDetailComponent implements OnInit {
  @Input() jobRequestForDisplay: JobRequest;
  constructor(private jobRequestService: JobRequestService,
    private adminNavbarService: AdminNavbarService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        // the passed parameters are just TESTS
        this.jobRequestService.getJobRequestById(1,+params['id']).subscribe(
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
    //PARAMETERS ARE JUST TEST
    this.jobRequestService.deleteJobRequest(1,this.jobRequestForDisplay.id).subscribe(
      (response: any) => {
        console.log("From server:"+response);
        this.jobRequestService.jobRequestsChanged.emit([]);
      }, (error) => {
        console.log(error)
      } 
    );
    this.router.navigate(['/test', {outlets: {primary:[], 'listcontent':['jobrequests']}}]);
    this.adminNavbarService.linkChanged.emit(['Job Requests']);
  }

}
