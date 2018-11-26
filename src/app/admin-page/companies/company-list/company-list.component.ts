import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/company.model';
import { CompanyService } from '../companies.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(
      (companies: any[]) => {
        this.companies = companies.slice();
      }, (error) => {
        console.log(error)
      }
    );
    
    this.companyService.companiesChanged.subscribe(
      (companies: Company[]) => {
        this.companies = companies.slice();
      }
    );
  }

}
