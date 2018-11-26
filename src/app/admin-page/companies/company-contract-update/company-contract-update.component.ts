import { Component, OnInit, ViewChild } from '@angular/core';
import { Contract } from 'src/app/shared/contract.model';
import { NgForm } from '@angular/forms';
import { ContractsService } from 'src/app/company-page/jobrequests/contracts.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';

@Component({
  selector: 'app-company-contract-update',
  templateUrl: './company-contract-update.component.html',
  styleUrls: ['./company-contract-update.component.scss']
})
export class CompanyContractUpdateComponent implements OnInit {

  contractForUpdate: Contract;
  @ViewChild('f') updateForm: NgForm;
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
            this.contractForUpdate = contract;
          }, (error) => {
            console.log(error)
          }
        );
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

    this.router.navigate(['/admin', {outlets: {primary:[], 'adminlistcontent':['companies', this.company_id, 'jobrequests', this.contractForUpdate.jobRequest.id, 'contracts']}}]);
    this.adminNavbarService.linkChanged.emit([this.contractForUpdate.jobRequest.company.companyName, 'requests', this.contractForUpdate.jobRequest.description]);
  }

  private strToDate(strDate): Date{
    let day = parseInt(strDate.substring(0,2));
    let month = parseInt(strDate.substring(3,5));
    let year = parseInt(strDate.substring(6,10));

    return new Date(year,month-1, day);
  }

}
