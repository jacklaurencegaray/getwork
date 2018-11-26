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
      10,
      new Date(),
      new Date(),
      this.createForm.form.value.companyName,
      this.createForm.form.value.address,
      this.createForm.form.value.companyUrl,
      this.createForm.form.value.telephoneNumber,
      this.createForm.form.value.email,
      this.createForm.form.value.password
    );
    this.companyService.createCompany(this.newCompany).subscribe(
      (response: any) => {
        console.log(response);
        this.companyService.companiesChanged.emit([]);
      }, (error) => {
            console.log(error);
      }
    );
    this.router.navigate(['/admin', {outlets: {primary:[], 'adminlistcontent':['companies']}}]);
    
  }
}
