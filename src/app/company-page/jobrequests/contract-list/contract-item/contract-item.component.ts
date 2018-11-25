import { Component, OnInit, Input } from '@angular/core';
import { Contract } from 'src/app/shared/contract.model';
import { ContractsService } from '../../contracts.service';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';

@Component({
  selector: 'app-contract-item',
  templateUrl: './contract-item.component.html',
  styleUrls: ['./contract-item.component.scss']
})
export class ContractItemComponent implements OnInit {

  @Input('contractElement') contract: Contract;
  constructor(private contractsService: ContractsService,
    private adminNavbarService: AdminNavbarService) { }

  ngOnInit() {
  }

  onContractSelected(){
    this.contractsService.contractSelected.emit(this.contract);
    this.adminNavbarService.linkChanged.emit(['Job Requests', ''+this.contract.jobRequest_id, 'Contracts', ''+this.contract.id]);
  }
}
