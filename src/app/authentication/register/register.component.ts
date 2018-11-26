import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Company } from 'src/app/shared/company.model';
import { CompanyService } from 'src/app/admin-page/companies/companies.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../authentication.component.scss', './register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  @ViewChild('f') registrationForm: NgForm;
  newCompany: Company;
  constructor(private router: Router,
    private companyService: CompanyService) {
  }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  registerCompany(){
    this.newCompany = new Company(10,
      new Date(),
      new Date(),
      this.registrationForm.form.value.companyName,
      this.registrationForm.form.value.address,
      this.registrationForm.form.value.companyUrl,
      this.registrationForm.form.value.telephoneNumber,
      this.registrationForm.form.value.email,
      this.registrationForm.form.value.password
    );

    this.companyService.createCompany(this.newCompany).subscribe(
      (response: any) => {
        console.log(response);
        this.companyService.companiesChanged.emit([]);
      }, (error) => {
            console.log(error);
      }
    );

    this.router.navigate(['/login']);
  }

}
