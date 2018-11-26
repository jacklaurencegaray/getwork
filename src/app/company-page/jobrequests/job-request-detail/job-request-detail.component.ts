import { Component, OnInit, Input } from '@angular/core';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { JobRequestService } from '../jobrequests.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';
import { Company } from 'src/app/shared/company.model';
import { CompanyService } from 'src/app/admin-page/companies/companies.service';

@Component({
  selector: 'app-job-request-detail',
  templateUrl: './job-request-detail.component.html',
  styleUrls: ['./job-request-detail.component.scss']
})
export class JobRequestDetailComponent implements OnInit {
  @Input() jobRequestForDisplay: JobRequest;
  currentCompany: Company;
  constructor(private jobRequestService: JobRequestService,
    private adminNavbarService: AdminNavbarService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.companyService.getCompanyByName(this.route.parent.snapshot.params['companyName']).subscribe(
      (company: any) => {
        this.currentCompany = company;
          this.route.params.subscribe(
            (params: Params) => {
              // the passed parameters are just TESTS
              this.jobRequestService.getJobRequestById(this.currentCompany.id,+params['id']).subscribe(
                (jobRequest: any) => {
                  this.jobRequestForDisplay = jobRequest;
                  console.log(this.jobRequestForDisplay);
                }, (error) => {
                  console.log(error)
                }
              );
            }
          );
      }, (error) => {
        console.log(error)
      }
    );
  }

  deleteJobRequest(){
    //PARAMETERS ARE JUST TEST
    this.jobRequestService.deleteJobRequest(this.currentCompany.id,this.jobRequestForDisplay.id).subscribe(
      (response: any) => {
        console.log("From server:"+response);
        this.jobRequestService.jobRequestsChanged.emit([]);
      }, (error) => {
        console.log(error)
      } 
    );
    this.router.navigate(['/'+this.currentCompany.companyName, {outlets: {primary:[], 'listcontent':['jobrequests']}}]);
    this.adminNavbarService.linkChanged.emit(['Job Requests']);
  }
  
  onUpdate(){
    this.router.navigate(['/'+this.currentCompany.companyName,'jobrequests', this.jobRequestForDisplay.id, 'update']);
  }

  gotoContracts(){
    this.router.navigate(['/'+this.currentCompany.companyName, {outlets: {primary: [], listcontent: ['jobrequests', this.jobRequestForDisplay.id, 'contracts']}}]);
  }
}
