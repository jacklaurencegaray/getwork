import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/shared/contract.model';
import { ContractsService } from 'src/app/company-page/jobrequests/contracts.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';

@Component({
  selector: 'app-company-contract-list',
  templateUrl: './company-contract-list.component.html',
  styleUrls: ['./company-contract-list.component.scss']
})
export class CompanyContractListComponent implements OnInit {

  contracts: Contract[];
  jr_id: number;
  constructor(private contractsService: ContractsService,
    private adminNavbarService: AdminNavbarService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.jr_id = +this.route.snapshot.params['jobRequestId'];
    console.log(this.jr_id);
    this.route.params.subscribe(
      (params: Params) => {
        this.contracts = this.contractsService.getContracts(+params['jobRequestId']);
      }
    );

    this.contractsService.contractsChanged.subscribe(
      (contracts: Contract[]) => {
        let jobRequest_id = +this.route.snapshot.params['id'];
        console.log(jobRequest_id);
        this.contracts = this.contractsService.getContractsByJobRequestId(contracts,jobRequest_id);
      }
    );

    this.adminNavbarService.linkChanged.emit(['sample name', 'requests', 'sample handler', 'contracts']);
  }

}
