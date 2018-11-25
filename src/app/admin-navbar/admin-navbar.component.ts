import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminNavbarService } from './admin-navbar.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {
  constructor(private router: Router,
    private adminNavbarService: AdminNavbarService) { }

  ngOnInit() {
  }
  
  goHome(){
    this.router.navigate(['/admin', {outlets: {primary:[], 'adminlistcontent':['companies']}}]);
    this.adminNavbarService.linkChanged.emit(['Companies']);
  }
}
