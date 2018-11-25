import { Component, OnInit, Input } from '@angular/core';
import { Contract } from 'src/app/shared/contract.model';
import { ContractsService } from 'src/app/company-page/jobrequests/contracts.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-company-contract-detail',
  templateUrl: './company-contract-detail.component.html',
  styleUrls: ['./company-contract-detail.component.scss']
})
export class CompanyContractDetailComponent implements OnInit {

  @Input() contractForDisplay: Contract;
  company_id: number;
  constructor(private contractsService: ContractsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.company_id = +params['id'];
        this.contractForDisplay = this.contractsService.getContractById(+params['contractId']);
      }
    );
  }

  deleteContract(){
    this.contractsService.deleteContract(this.contractForDisplay.id);
    this.router.navigate(['/admin', {outlets: {primary:[], 'adminlistcontent':['companies', this.company_id, 'jobrequests', this.contractForDisplay.jobRequest_id, 'contracts']}}]);
  }

}
