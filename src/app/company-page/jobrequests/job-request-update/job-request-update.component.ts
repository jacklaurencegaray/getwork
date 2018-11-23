import { Component, OnInit, ViewChild } from '@angular/core';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { JobRequestService } from '../jobrequests.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-job-request-update',
  templateUrl: './job-request-update.component.html',
  styleUrls: ['./job-request-update.component.scss']
})
export class JobRequestUpdateComponent implements OnInit {
  jobRequestForUpdate: JobRequest;
  startDate: string;
  endDate: string;
  expiryDate: string;
  @ViewChild('f') updateForm: NgForm;

  constructor(private jobRequestService: JobRequestService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.jobRequestForUpdate = Object.create(this.jobRequestService.getJobRequestById(+params['id']));
      }
    );
    this.startDate = this.jobRequestForUpdate.startDate.toISOString().substring(0,10);
    this.endDate = this.jobRequestForUpdate.endDate.toISOString().substring(0,10);
    this.expiryDate = this.jobRequestForUpdate.expiryDate.toISOString().substring(0,10);
  }

  updateJobRequest(){
    this.jobRequestForUpdate.displayHandler = this.updateForm.form.value.displayHandler;
    this.jobRequestForUpdate.contact = this.updateForm.form.value.contact;
    this.jobRequestForUpdate.description = this.updateForm.form.value.description;
    this.jobRequestForUpdate.status = this.updateForm.form.value.status;
    this.jobRequestForUpdate.startDate = this.updateForm.form.value.startDate;
    this.jobRequestForUpdate.endDate = this.updateForm.form.value.endDate;
    this.jobRequestForUpdate.expiryDate = this.updateForm.form.value.expirationDate;
    
    this.jobRequestService.updateJobRequest(this.jobRequestForUpdate);
    this.router.navigate(['/test']);
  }

}
