import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-request-detail',
  templateUrl: './job-request-detail.component.html',
  styleUrls: ['./job-request-detail.component.scss']
})
export class JobRequestDetailComponent implements OnInit {
  @Input() jobRequestForDisplay: JobRequest;
  constructor() { }

  ngOnInit() {
  }

}
