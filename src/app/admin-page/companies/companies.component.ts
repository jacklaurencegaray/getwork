import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/company.model';
import { CompanyService } from './companies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  providers: [CompanyService]
})
export class CompaniesComponent implements OnInit {

  companyForDisplay: Company;
  
  constructor(private companyService: CompanyService,
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
