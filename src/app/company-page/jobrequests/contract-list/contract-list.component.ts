import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/shared/contract.model';
import { ContractsService } from '../contracts.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss']
})
export class ContractListComponent implements OnInit {

  contracts: Contract[];
  constructor(private contractsService: ContractsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.contracts = this.contractsService.getContracts(+params['id']);
      }
    );

    this.contractsService.contractsChanged.subscribe(
      (contracts: Contract[]) => {
        let owner_id = this.route.snapshot.params['id'];
        this.contracts = this.contractsService.getContractsByOwner(contracts,owner_id);
      }
    );
  }

}
