import { Component, OnInit, Input } from '@angular/core';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { JobRequestService } from 'src/app/company-page/jobrequests/jobrequests.service';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';
import { CompanyService } from '../../companies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-job-requests-item',
  templateUrl: './company-job-requests-item.component.html',
  styleUrls: ['./company-job-requests-item.component.scss']
})
export class CompanyJobRequestsItemComponent implements OnInit {

  @Input('jrElement') jr: JobRequest;
  currentCompanyId;
  currentCompany;
  constructor(private jobRequestService: JobRequestService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private adminNavbarService: AdminNavbarService) { }

  ngOnInit() {
    this.currentCompanyId = this.route.snapshot.params['id'];
  }

  onJobRequestSelected(){
    this.jobRequestService.jobRequestSelected.emit(this.jr);
    this.companyService.getCompanyById(+this.currentCompanyId).subscribe(
      (company: any) => {
        this.currentCompany = company;
        this.adminNavbarService.linkChanged.emit([this.currentCompany.companyName, 'requests', this.jr.description]);
      }
    );
  }

}
