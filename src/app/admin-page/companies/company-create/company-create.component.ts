import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Company } from 'src/app/shared/company.model';
import { CompanyService } from '../companies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent implements OnInit {
  @ViewChild("f") createForm: NgForm;
  newCompany: Company;

  constructor(private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router){

  }
  ngOnInit() {
  }
  
  createCompany(){
    this.newCompany = new Company(
      Math.floor(Math.random() * (50000 - 5 + 1)) + 5,
      this.createForm.form.value.companyName,
      this.createForm.form.value.address,
      this.createForm.form.value.contactNum,
      this.createForm.form.value.website,
      this.createForm.form.value.email,
    );
    this.companyService.addCompany(this.newCompany);
    console.log(this.companyService.getCompanies());
    this.router.navigate(['/admin', {outlets: {primary:[], 'adminlistcontent':['companies']}}]);
    
  }
}
