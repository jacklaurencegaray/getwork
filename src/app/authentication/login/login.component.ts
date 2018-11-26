import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CompanyService } from 'src/app/admin-page/companies/companies.service';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../authentication.component.scss', './login.component.scss']
})
export class LoginComponent {
  error: String = '';
  @ViewChild('f') loginForm: NgForm;

  constructor(private router: Router,
    private homeService: HomeService) {
  }

  login() {
    console.log("hello :" + this.loginForm.form.value.email);
    this.homeService.login(this.loginForm.form.value.email, this.loginForm.form.value.password).subscribe(
      (company: any) => {
        this.router.navigate(['/test']);
      }, (error) => {
        this.router.navigate(['/login']);
        this.error = 'You entered an invalid email/password.';
      }
    );
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }

}
