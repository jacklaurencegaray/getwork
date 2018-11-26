import { Component, OnInit } from '@angular/core';
import { JobRequestService } from '../jobrequests.service';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';
import { Company } from 'src/app/shared/company.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/admin-page/companies/companies.service';

@Component({
  selector: 'app-jobrequest-list',
  templateUrl: './jobrequest-list.component.html',
  styleUrls: ['./jobrequest-list.component.scss']
})
export class JobrequestListComponent implements OnInit {
  currentCompany;
  jobRequests = [];
  constructor(private jobRequestService: JobRequestService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router,
    private adminNavbarService: AdminNavbarService) { 
    }
  
  ngOnInit() {
    this.companyService.getCompanyByName(this.route.parent.snapshot.params['companyName']).subscribe(
      (company: any) => {
        this.currentCompany = company;
        this.jobRequestService.getJobRequests(this.currentCompany.id)
        .subscribe(
          (jobRequests: any[]) => {
            this.jobRequests = jobRequests.slice();
          }, (error) => {
            console.log(error)
          }
        );
      }, (error) => {
        console.log(error)
      }
    );

    this.jobRequestService.jobRequestsChanged.subscribe(
      (jobRequests: JobRequest[]) => {
        this.jobRequestService.getJobRequests(this.currentCompany.id).subscribe(
          (jobRequests: any[]) => {
            this.jobRequests = jobRequests.slice();
          }, (error) => {
          console.log(error)
        }
        );
      }
    );
  }

  onCreate(){
    this.adminNavbarService.linkChanged.emit(['Job Requests']);
    this.router.navigate(['/'+this.currentCompany.companyName,'jobrequests', 'create']);
  }

}
