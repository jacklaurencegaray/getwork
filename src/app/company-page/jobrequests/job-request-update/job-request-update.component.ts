import { Component, OnInit, ViewChild } from '@angular/core';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { JobRequestService } from '../jobrequests.service';
import { ActivatedRoute, Params } from '@angular/router';
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
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.jobRequestForUpdate = this.jobRequestService.getJobRequestById(+params['id']);
      }
    );
    this.startDate = this.jobRequestForUpdate.startDate.toISOString().substring(0,10);
    this.endDate = this.jobRequestForUpdate.endDate.toISOString().substring(0,10);
    this.expiryDate = this.jobRequestForUpdate.expiryDate.toISOString().substring(0,10);
  }

}
