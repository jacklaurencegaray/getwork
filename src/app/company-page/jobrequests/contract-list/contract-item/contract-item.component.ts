import { Component, OnInit, Input } from '@angular/core';
import { Contract } from 'src/app/shared/contract.model';
import { ContractsService } from '../../contracts.service';

@Component({
  selector: 'app-contract-item',
  templateUrl: './contract-item.component.html',
  styleUrls: ['./contract-item.component.scss']
})
export class ContractItemComponent implements OnInit {

  @Input('contractElement') contract: Contract;
  constructor(private contractsService: ContractsService) { }

  ngOnInit() {
  }

  onContractSelected(){
    this.contractsService.contractSelected.emit(this.contract);
  }
}
