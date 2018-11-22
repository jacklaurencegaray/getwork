import { Component, OnInit } from '@angular/core';
import { JobRequestService } from './jobrequests.service';

@Component({
  selector: 'app-jobrequests',
  templateUrl: './jobrequests.component.html',
  styleUrls: ['./jobrequests.component.scss'],
  providers: [JobRequestService]
})
export class JobrequestsComponent implements OnInit {

  constructor(private jobRequestService: JobRequestService) { }

  ngOnInit() {
  }

}
