import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/shared/contract.model';
import { ContractsService } from 'src/app/company-page/jobrequests/contracts.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';
import { CompanyService } from '../companies.service';
import { JobRequestService } from 'src/app/company-page/jobrequests/jobrequests.service';

@Component({
  selector: 'app-company-contract-list',
  templateUrl: './company-contract-list.component.html',
  styleUrls: ['./company-contract-list.component.scss']
})
export class CompanyContractListComponent implements OnInit {

  contracts: Contract[];
  currentCompany;
  constructor(private contractsService: ContractsService,
    private companyService: CompanyService,
    private jobRequestService: JobRequestService,
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

    this.companyService.getCompanyById(+this.route.snapshot.params['id']).subscribe(
      (company: any) => {
        this.currentCompany = company;
        this.jobRequestService.getJobRequestById(this.currentCompany.id,+this.route.snapshot.params['jobRequestId']).subscribe(
          (jobRequest: any) => {
            this.adminNavbarService.linkChanged.emit([this.currentCompany.companyName, 'requests', jobRequest.description , 'contracts']);
          }
        );
      }
    );
  }

}
