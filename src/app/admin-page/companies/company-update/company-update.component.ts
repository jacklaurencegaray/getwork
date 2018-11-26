import { Component, OnInit, ViewChild } from '@angular/core';
import { Company } from 'src/app/shared/company.model';
import { NgForm } from '@angular/forms';
import { CompanyService } from '../companies.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss']
})
export class CompanyUpdateComponent implements OnInit {

  companyForUpdate: Company;
  @ViewChild('f') updateForm: NgForm;

  constructor(private companyService: CompanyService,
    private adminNavbarService: AdminNavbarService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.companyService.getCompanyById(+params['id']).subscribe(
          (company: any) => {
            this.companyForUpdate = company;
          }, (error) => {
            console.log(error)
          }
        );
      }
    );
  }

  updateCompany(){
    this.companyForUpdate.companyName = this.updateForm.form.value.companyName;
    this.companyForUpdate.address = this.updateForm.form.value.address;
    this.companyForUpdate.telephoneNumber = this.updateForm.form.value.telephoneNumber;
    this.companyForUpdate.companyUrl = this.updateForm.form.value.companyUrl;
    this.companyForUpdate.email = this.updateForm.form.value.email;
    this.companyForUpdate.modificationDate = new Date();

    this.companyService.updateCompany(this.companyForUpdate).subscribe(
      (response: any) => {
        console.log(response);
        this.companyService.companiesChanged.emit([]);
      }, (error) => {
            console.log(error);
      }
    );

    this.router.navigate(['/admin', {outlets: {primary:[], 'adminlistcontent':['companies']}}]);
    this.adminNavbarService.linkChanged.emit(['Companies']);
  }
}
