import { Component, OnInit, Input } from '@angular/core';
import { Contract } from 'src/app/shared/contract.model';
import { ContractsService } from 'src/app/company-page/jobrequests/contracts.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';

@Component({
  selector: 'app-company-contract-detail',
  templateUrl: './company-contract-detail.component.html',
  styleUrls: ['./company-contract-detail.component.scss']
})
export class CompanyContractDetailComponent implements OnInit {

  @Input() contractForDisplay: Contract;
  company_id: number;
  constructor(private contractsService: ContractsService,
    private adminNavbarService: AdminNavbarService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.contractsService.getContractById(+params['id'],+params['jobRequestId'],+params['contractId']).subscribe(
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
    this.contractsService.deleteContract(this.contractForDisplay.jobRequest.company.id,this.contractForDisplay.jobRequest.id,this.contractForDisplay.id).subscribe(
      (response: any) => {
        console.log("From server:"+response);
        this.contractsService.contractsChanged.emit([]);
      }, (error) => {
        console.log(error)
      } 
    );
    this.router.navigate(['/admin', {outlets: {primary:[], 'adminlistcontent':['companies', this.company_id, 'jobrequests', this.contractForDisplay.jobRequest.id, 'contracts']}}]);
    this.adminNavbarService.linkChanged.emit([this.contractForDisplay.jobRequest.company.companyName, 'requests', this.contractForDisplay.jobRequest.description]);
  }

}
