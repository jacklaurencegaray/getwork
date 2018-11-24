import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/company.model';
import { CompanyService } from './companies.service';
import { Router } from '@angular/router';
import { JobRequestService } from 'src/app/company-page/jobrequests/jobrequests.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  providers: [CompanyService, JobRequestService]
})
export class CompaniesComponent implements OnInit {

  companyForDisplay: Company;
  
  constructor(private companyService: CompanyService,
    private jobRequestService: JobRequestService,
    private router: Router) { }
  
  ngOnInit(){
    this.companyService.companySelected.subscribe(
        (company: Company) => {
            this.companyForDisplay = company;
        }
    );
    this.router.navigate(['/admin', {outlets: {primary:[], 'adminlistcontent':['companies']}}]);
  }

}
