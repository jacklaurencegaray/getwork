import { Component, OnInit } from '@angular/core';
import { JobRequestService } from './jobrequests/jobrequests.service';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss'],
  providers: [JobRequestService]
})
export class CompanyPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
