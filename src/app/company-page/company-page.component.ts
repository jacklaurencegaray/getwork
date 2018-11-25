import { Component, OnInit } from '@angular/core';
import { JobRequestService } from './jobrequests/jobrequests.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminNavbarService } from '../admin-navbar/admin-navbar.service';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss'],
  providers: [AdminNavbarService]
})
export class CompanyPageComponent implements OnInit {

  activeLinks: string[] = ['Job Requests'];
  constructor(private route: ActivatedRoute,
    private adminNavBarService: AdminNavbarService) { }
  
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log("header links: " + this.route);
      }
    );

    this.adminNavBarService.linkChanged.subscribe(
      (paths: string[]) => {
        this.activeLinks = paths.slice();
        console.log("received here");
      }
    );
  }

}
