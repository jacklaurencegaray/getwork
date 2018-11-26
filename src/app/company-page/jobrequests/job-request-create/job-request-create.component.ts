import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { JobRequestService } from '../jobrequests.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Company } from 'src/app/shared/company.model';
import { CompanyService } from 'src/app/admin-page/companies/companies.service';

@Component({
  selector: 'app-job-request-create',
  templateUrl: './job-request-create.component.html',
  styleUrls: ['./job-request-create.component.scss']
})
export class JobRequestCreateComponent implements OnInit {
  @ViewChild("f") createForm: NgForm;
  newJobRequest: JobRequest;
  currentCompany: Company;

  constructor(private jobRequestService: JobRequestService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router){

  }
  ngOnInit() {
    this.companyService.getCompanyByName(this.route.parent.snapshot.params['companyName']).subscribe(
      (company: any) => {
        this.currentCompany = company;
      }, (error) => {
        console.log(error)
      }
    );
  }
  
  createJobRequest(){
    // new Company is temporary until Company service is edited, and closedDate too
    this.newJobRequest = new JobRequest(
      11,
      '15101138195',
      new Date(),
      new Date(),
      this.currentCompany,
      this.createForm.form.value.status,
      this.createForm.form.value.description,
      this.createForm.form.value.startDate,
      this.createForm.form.value.endDate,
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
    this.router.navigate(['/'+this.currentCompany.companyName, {outlets: {primary:[], 'listcontent':['jobrequests']}}]);
    
  }
}
