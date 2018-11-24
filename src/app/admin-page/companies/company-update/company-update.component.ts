import { Component, OnInit, ViewChild } from '@angular/core';
import { Company } from 'src/app/shared/company.model';
import { NgForm } from '@angular/forms';
import { CompanyService } from '../companies.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss']
})
export class CompanyUpdateComponent implements OnInit {

  companyForUpdate: Company;
  @ViewChild('f') updateForm: NgForm;

  constructor(private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.companyForUpdate = Object.create(this.companyService.getCompanyById(+params['id']));
      }
    ); 
  }

  updateCompany(){
    this.companyForUpdate.companyName = this.updateForm.form.value.companyName;
    this.companyForUpdate.address = this.updateForm.form.value.address;
    this.companyForUpdate.contactNum = this.updateForm.form.value.contactNum;
    this.companyForUpdate.website = this.updateForm.form.value.website;
    this.companyForUpdate.email = this.updateForm.form.value.email;

    this.companyService.updateCompany(this.companyForUpdate);
    this.router.navigate(['/admin', {outlets: {primary:[], 'adminlistcontent':['companies']}}]);
  }
}
