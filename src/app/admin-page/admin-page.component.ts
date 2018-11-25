import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminNavbarService } from '../admin-navbar/admin-navbar.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
  providers: [AdminNavbarService]
})
export class AdminPageComponent implements OnInit {
  activeLinks: string[] = ['Companies'];
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
      }
    );
  }

}
