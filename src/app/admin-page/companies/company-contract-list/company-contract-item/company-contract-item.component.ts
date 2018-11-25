import { Component, OnInit, Input } from '@angular/core';
import { Contract } from 'src/app/shared/contract.model';
import { ContractsService } from 'src/app/company-page/jobrequests/contracts.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-company-contract-item',
  templateUrl: './company-contract-item.component.html',
  styleUrls: ['./company-contract-item.component.scss']
})
export class CompanyContractItemComponent implements OnInit {

  @Input('contractElement') contract: Contract;
  company_id: number;
  constructor(private contractsService: ContractsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.company_id = +params['id'];
      }
    );
  }

  onContractSelected(){
    this.contractsService.contractSelected.emit(this.contract);
  }

}
