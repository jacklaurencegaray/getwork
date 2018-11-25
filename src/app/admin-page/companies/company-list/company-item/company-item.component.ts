import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/shared/company.model';
import { CompanyService } from '../../companies.service';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss']
})
export class CompanyItemComponent implements OnInit {

  @Input('companyElement') company: Company;
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
  }

  onCompanySelected(){
    this.companyService.companySelected.emit(this.company);
  }

}
