import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { JobRequestService } from '../jobrequests.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-job-request-create',
  templateUrl: './job-request-create.component.html',
  styleUrls: ['./job-request-create.component.scss']
})
export class JobRequestCreateComponent implements OnInit {
  @ViewChild("f") createForm: NgForm;
  newJobRequest: JobRequest;

  constructor(private jobRequestService: JobRequestService,
    private route: ActivatedRoute,
    private router: Router){

  }
  ngOnInit() {
  }
  
  createJobRequest(){
    this.newJobRequest = new JobRequest(
      Math.floor(Math.random() * (50000 - 5 + 1)) + 5,
      this.createForm.form.value.displayHandler,
      this.createForm.form.value.status,
      this.createForm.form.value.contact,
      this.createForm.form.value.description,
      this.strToDate(this.createForm.form.value.startDate),
      this.strToDate(this.createForm.form.value.endDate),
      this.strToDate(this.createForm.form.value.expirationDate)
    );
    this.jobRequestService.addJobRequest(this.newJobRequest);
    console.log(this.jobRequestService.getJobRequests());
    this.router.navigate(['/test', {outlets: {primary:[], 'listcontent':['jobrequests']}}]);
    
  }

  private strToDate(strDate): Date{
    let day = parseInt(strDate.substring(0,2));
    let month = parseInt(strDate.substring(3,5));
    let year = parseInt(strDate.substring(6,10));

    return new Date(year,month-1, day);
  }
}
