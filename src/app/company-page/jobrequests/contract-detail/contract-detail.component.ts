import { Component, OnInit, Input } from '@angular/core';
import { Contract } from 'src/app/shared/contract.model';
import { ContractsService } from '../contracts.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.scss']
})
export class ContractDetailComponent implements OnInit {

  @Input() contractForDisplay: Contract;
  constructor(private contractsService: ContractsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        //paramters are just TEST!
        this.contractsService.getContractById(1,+params['id'],+params['contractId']).subscribe(
          (contract: any) => {
            this.contractForDisplay = contract;
            console.log(contract);
          }, (error) => {
            console.log(error)
          }
        );
      }
    );
  }

  deleteContract(){
    this.contractsService.deleteContract(this.contractForDisplay.id);
    this.router.navigate(['/test', {outlets: {primary:[], 'listcontent':['jobrequests', this.contractForDisplay.jobRequest.id, 'contracts']}}]);
  }
}
