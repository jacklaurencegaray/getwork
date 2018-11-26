import { Component, OnInit, ViewChild } from '@angular/core';
import { Contract } from 'src/app/shared/contract.model';
import { NgForm } from '@angular/forms';
import { ContractsService } from '../contracts.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';
import { CompanyService } from 'src/app/admin-page/companies/companies.service';
import { Company } from 'src/app/shared/company.model';

@Component({
  selector: 'app-contract-update',
  templateUrl: './contract-update.component.html',
  styleUrls: ['./contract-update.component.scss']
})
export class ContractUpdateComponent implements OnInit {

  contractForUpdate: Contract;
  startDate: string;
  endDate: string;
  expiryDate: string;
  @ViewChild('f') updateForm: NgForm;
  currentCompany: Company;

  constructor(private contractsService: ContractsService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private adminNavbarService: AdminNavbarService,
    private router: Router) { }

  ngOnInit() {
    this.companyService.getCompanyByName(this.route.parent.snapshot.params['companyName']).subscribe(
      (company: any) => {
        this.currentCompany = company;
        this.route.params.subscribe(
          //parameters are only TEST!
          (params: Params) => {
            this.contractsService.getContractById(this.currentCompany.id,+params['id'], +params['contractId']).subscribe(
              (contract: any) => {
                this.contractForUpdate = contract;
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

  updateContract(){
    this.contractForUpdate.contractorName = this.updateForm.form.value.contractorName;
    this.contractForUpdate.type = this.updateForm.form.value.type;
    this.contractForUpdate.status = this.updateForm.form.value.status;
    this.contractForUpdate.startDate = this.updateForm.form.value.startDate;
    this.contractForUpdate.endDate = this.updateForm.form.value.endDate;
    
    this.contractsService.updateContracts(this.contractForUpdate).subscribe(
      (response: any) => {
        console.log(response);
        this.contractsService.contractsChanged.emit([]);
      }, (error) => {
            console.log(error);
      }
    );
    this.router.navigate(['/'+this.currentCompany.companyName, {outlets: {primary:[], 'listcontent':['jobrequests', this.contractForUpdate.jobRequest.id, 'contracts']}}]);
    this.adminNavbarService.linkChanged.emit(['Job Requests', ''+this.contractForUpdate.jobRequest.id, 'Contracts']);
  }
}
