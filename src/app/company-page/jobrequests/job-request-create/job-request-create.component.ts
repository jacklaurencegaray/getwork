import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { JobRequestService } from '../jobrequests.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-job-request-create',
  templateUrl: './job-request-create.component.html',
  styleUrls: ['./job-request-create.component.scss']
})
export class JobRequestCreateComponent implements OnInit {
  @ViewChild("f") createForm: NgForm;
  newJobRequest: JobRequest;

  constructor(private jobRequestService: JobRequestService,
    private route: ActivatedRoute){

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
      this.createForm.form.value.startDate,
      this.createForm.form.value.endDate,
      this.createForm.form.value.expirationDate
    );
    this.jobRequestService.addJobRequest(this.newJobRequest);
    console.log(this.jobRequestService.getJobRequests());
    
  }
}
