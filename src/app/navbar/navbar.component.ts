import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminNavbarService } from '../admin-navbar/admin-navbar.service';
import { CompanyService } from '../admin-page/companies/companies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentCompany;
  constructor(private router:Router,
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private adminNavbarService: AdminNavbarService) { }

  ngOnInit() {
  }
  
  goHome(){
    this.router.navigate(['/'+this.route.snapshot.params['companyName'], {outlets: {primary:[], 'listcontent':['jobrequests']}}]);
    this.adminNavbarService.linkChanged.emit(['Job Requests']);
  }


}
