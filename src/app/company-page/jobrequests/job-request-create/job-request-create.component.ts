import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { JobRequestService } from '../jobrequests.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Company } from 'src/app/shared/company.model';

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
    // new Company is temporary until Company service is edited, and closedDate too
    this.newJobRequest = new JobRequest(
      11,
      '15101138101',
      new Date(),
      new Date(),
      new Company(1,
        new Date(),
        new Date(), 
        'Wakanda', 
        'France de Guatero', 
        'versace.com', 
        '09452186422', 
        'versace@gmail.com', 
        'versace'),
      this.createForm.form.value.status,
      this.createForm.form.value.description,
      this.strToDate(this.createForm.form.value.startDate),
      this.strToDate(this.createForm.form.value.endDate),
      null
    );
    this.jobRequestService.createJobRequest(this.newJobRequest).subscribe(
      (response: any) => {
        console.log(response);
        this.jobRequestService.jobRequestsChanged.emit([]);
      }, (error) => {
            console.log(error);
      }
    );
    this.router.navigate(['/test', {outlets: {primary:[], 'listcontent':['jobrequests']}}]);
    
  }

  private strToDate(strDate): Date{
    let day = parseInt(strDate.substring(0,2));
    let month = parseInt(strDate.substring(3,5));
    let year = parseInt(strDate.substring(6,10));

    return new Date(year,month-1, day);
  }
}
