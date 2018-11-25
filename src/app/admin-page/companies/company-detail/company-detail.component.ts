import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/shared/company.model';
import { CompanyService } from '../companies.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  @Input() companyForDisplay: Company;
  constructor(private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.companyForDisplay = this.companyService.getCompanyById(+params['id']);
      }
    );
  }

  deleteCompany(){
    this.companyService.deleteCompany(this.companyForDisplay.id);
    this.router.navigate(['/admin', {outlets: {primary:[], 'adminlistcontent':['companies']}}]);
  }

}
