import { Component, OnInit, Input } from '@angular/core';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { JobRequestService } from '../../jobrequests.service';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';

@Component({
  selector: 'app-jobrequest-item',
  templateUrl: './jobrequest-item.component.html',
  styleUrls: ['./jobrequest-item.component.scss']
})
export class JobrequestItemComponent implements OnInit {
  @Input('jrElement') jr: JobRequest;
  constructor(private jobRequestService: JobRequestService,
    private adminNavbarService: AdminNavbarService) { }

  ngOnInit() {
  }

  onJobRequestSelected(){
    this.jobRequestService.jobRequestSelected.emit(this.jr);
    this.adminNavbarService.linkChanged.emit(['Job Requests', ''+this.jr.id]);
  }

}
