import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminNavbarService } from '../admin-navbar/admin-navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,
    private adminNavbarService: AdminNavbarService) { }

  ngOnInit() {
  }
  
  goHome(){
    this.router.navigate(['/test', {outlets: {primary:[], 'listcontent':['jobrequests']}}]);
    this.adminNavbarService.linkChanged.emit(['Job Requests']);
  }


}
