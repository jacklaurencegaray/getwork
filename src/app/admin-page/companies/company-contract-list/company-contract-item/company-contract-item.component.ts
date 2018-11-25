import { Component, OnInit, Input } from '@angular/core';
import { Contract } from 'src/app/shared/contract.model';
import { ContractsService } from 'src/app/company-page/jobrequests/contracts.service';

@Component({
  selector: 'app-company-contract-item',
  templateUrl: './company-contract-item.component.html',
  styleUrls: ['./company-contract-item.component.scss']
})
export class CompanyContractItemComponent implements OnInit {

  @Input('contractElement') contract: Contract;
  constructor(private contractsService: ContractsService) { }

  ngOnInit() {
  }

  onContractSelected(){
    this.contractsService.contractSelected.emit(this.contract);
  }

}
