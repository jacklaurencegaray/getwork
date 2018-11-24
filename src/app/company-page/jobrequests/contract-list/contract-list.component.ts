import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/shared/contract.model';
import { ContractsService } from '../contracts.service';
import { ActivatedRoute, Params } from '@angular/router';
import { JobRequest } from 'src/app/shared/jobrequest.model';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss']
})
export class ContractListComponent implements OnInit {

  contracts: Contract[];
  jr_id: number;
  constructor(private contractsService: ContractsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.jr_id = +this.route.snapshot.params['id'];
    console.log(this.jr_id);
    this.route.params.subscribe(
      (params: Params) => {
        this.contracts = this.contractsService.getContracts(+params['id']);
      }
    );

    this.contractsService.contractsChanged.subscribe(
      (contracts: Contract[]) => {
        let jobRequest_id = +this.route.snapshot.params['id'];
        console.log(jobRequest_id);
        this.contracts = this.contractsService.getContractsByJobRequestId(contracts,jobRequest_id);
      }
    );
  }

}
