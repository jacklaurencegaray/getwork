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
  constructor(private contractsService: ContractsService,
    private adminNavbarService: AdminNavbarService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.contractsService.getContracts(+params['id'], +params['jobRequestId']).subscribe(
          (contracts: any[]) => {
            this.contracts = contracts.slice();
          }, (error) => {
            console.log(error)
          }
        );
      }
    );
    
    this.contractsService.contractsChanged.subscribe(
      (contracts: Contract[]) => {
        this.contractsService.getContracts(+this.route.snapshot.params['id'], +this.route.snapshot.params['jobRequestId']).subscribe(
          (contracts: any[]) => {
            this.contracts = contracts.slice();
          }, (error) => {
          console.log(error)
        }
        );
      }
    );
    this.adminNavbarService.linkChanged.emit(['sample name', 'requests', 'sample handler', 'contracts']);
  }

}
