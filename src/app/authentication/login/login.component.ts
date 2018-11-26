import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CompanyService } from 'src/app/admin-page/companies/companies.service';
import { HomeService } from 'src/app/home.service';
import { Company } from 'src/app/shared/company.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../authentication.component.scss', './login.component.scss']
})
export class LoginComponent implements OnInit {
  
  @ViewChild('f') loginForm: NgForm;
  constructor(private router: Router,
    private homeService: HomeService) {
  }

  ngOnInit() {
  }
  
  login(){
    console.log("hello :"+this.loginForm.form.value.email);
    this.homeService.login(this.loginForm.form.value.email, this.loginForm.form.value.password).subscribe(
      (company: Company) => {
        if(company === null){
          this.loginForm.reset();
          this.router.navigate(['/login']);
        }else{
          this.router.navigate(['/'+company.companyName]);
        }
        //this.router.navigate(['/test']);
      }, (error) => {
        console.log(error);
      }
    );
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }

}
