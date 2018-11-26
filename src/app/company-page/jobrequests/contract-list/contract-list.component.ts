import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/shared/contract.model';
import { ContractsService } from '../contracts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';
import { Company } from 'src/app/shared/company.model';
import { CompanyService } from 'src/app/admin-page/companies/companies.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss']
})
export class ContractListComponent implements OnInit {

  contracts: Contract[];
  jr_id: number;
  currentCompany: Company;
  constructor(private contractsService: ContractsService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router,
    private adminNavbarService: AdminNavbarService) { }

  ngOnInit() {
    this.jr_id = +this.route.snapshot.params['id'];

    this.companyService.getCompanyByName(this.route.parent.snapshot.params['companyName']).subscribe(
      (company: any) => {
        this.currentCompany = company;
        this.contractsService.getContracts(this.currentCompany.id,+this.route.snapshot.params['id']).subscribe(
          (contracts: any[]) => {
            this.contracts = contracts.slice();
          }, (error) => {
            console.log(error)
          }
        );
      }, (error) => {
        console.log(error)
      }
    );

    this.contractsService.contractsChanged.subscribe(
      (contracts: Contract[]) => {
        this.contractsService.getContracts(this.currentCompany.id, this.jr_id).subscribe(
          (contracts: any[]) => {
            this.contracts = contracts.slice();
          }, (error) => {
          console.log(error)
        }
        );
      }
    );

    
    this.adminNavbarService.linkChanged.emit(['Job Requests', ''+this.jr_id, 'Contracts']);
  }

  onCreateContract(){
    this.adminNavbarService.linkChanged.emit(['Job Requests', ''+this.jr_id, 'Contracts' ]);
    this.router.navigate(['/'+this.currentCompany.companyName,{outlets: {primary: ['jobrequests', this.jr_id, 'contracts', 'create'] , listcontent: ['jobrequests', this.jr_id, 'contracts']}}]);
  }



}
