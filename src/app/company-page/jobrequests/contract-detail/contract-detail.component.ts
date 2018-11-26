import { Component, OnInit, Input } from '@angular/core';
import { Contract } from 'src/app/shared/contract.model';
import { ContractsService } from '../contracts.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CompanyService } from 'src/app/admin-page/companies/companies.service';
import { Company } from 'src/app/shared/company.model';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.scss']
})
export class ContractDetailComponent implements OnInit {

  @Input() contractForDisplay: Contract;
  currentCompany: Company;
  constructor(private contractsService: ContractsService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.companyService.getCompanyByName(this.route.parent.snapshot.params['companyName']).subscribe(
      (company: any) => {
        this.currentCompany = company;
        this.route.params.subscribe(
          (params: Params) => {
            //paramters are just TEST!
            this.contractsService.getContractById(this.currentCompany.id,+params['id'],+params['contractId']).subscribe(
              (contract: any) => {
                this.contractForDisplay = contract;
                console.log(contract);
              }, (error) => {
                console.log(error)
              }
            );
          }
        );
      }, (error) => {
        console.log(error)
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
    this.router.navigate(['/test', {outlets: {primary:[], 'listcontent':['jobrequests', this.contractForDisplay.jobRequest.id, 'contracts']}}]);
  }
}
