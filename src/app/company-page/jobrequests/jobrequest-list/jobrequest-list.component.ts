import { Component, OnInit } from '@angular/core';
import { JobRequestService } from '../jobrequests.service';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';
import { Company } from 'src/app/shared/company.model';

@Component({
  selector: 'app-jobrequest-list',
  templateUrl: './jobrequest-list.component.html',
  styleUrls: ['./jobrequest-list.component.scss']
})
export class JobrequestListComponent implements OnInit {
  testCompany = new Company(1,
    new Date(),
    new Date(), 
    'Wakanda', 
    'France de Guatero', 
    'versace.com', 
    '09452186422', 
    'versace@gmail.com', 
    'versace');
  jobRequests = [];
  constructor(private jobRequestService: JobRequestService,
    private adminNavbarService: AdminNavbarService) { }

  ngOnInit() {
    // this.jobRequestService.jobRequestsChanged.subscribe(
    //   (jobRequests: JobRequest[]) => {
    //     this.jobRequests = jobRequests.slice();
    //   }
    // );
    this.jobRequestService.getJobRequests(
      this.testCompany.companyName, 
      this.testCompany.id)
      .subscribe(
        (jobRequests: any[]) => {
          this.jobRequests = jobRequests;
        }, (error) => {
          console.log(error)
        }
      );
  }

  onCreate(){
    this.adminNavbarService.linkChanged.emit(['Job Requests']);
  }

}
