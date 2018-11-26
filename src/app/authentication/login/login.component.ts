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
      (company: any) => {
        this.router.navigate(['/test']);
      }, (error) => {
        this.router.navigate(['/login']);
      }
    );
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }

}
