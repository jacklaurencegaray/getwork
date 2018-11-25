import { Component, OnInit, ViewChild } from '@angular/core';
import { Contract } from 'src/app/shared/contract.model';
import { NgForm } from '@angular/forms';
import { ContractsService } from 'src/app/company-page/jobrequests/contracts.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-company-contract-update',
  templateUrl: './company-contract-update.component.html',
  styleUrls: ['./company-contract-update.component.scss']
})
export class CompanyContractUpdateComponent implements OnInit {

  contractForUpdate: Contract;
  startDate: string;
  endDate: string;
  expiryDate: string;
  @ViewChild('f') updateForm: NgForm;
  company_id: number;
  constructor(private contractsService: ContractsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.company_id = +params['id'];
        this.contractForUpdate = Object.create(this.contractsService.getContractById(+params['contractId']));
      }
    );
    console.log(this.contractForUpdate);
    this.startDate = this.contractForUpdate.startDate.toISOString().substring(0,10);
    this.endDate = this.contractForUpdate.endDate.toISOString().substring(0,10);
  }

  updateContract(){
    this.contractForUpdate.contractorName = this.updateForm.form.value.contractorName;
    this.contractForUpdate.type = this.updateForm.form.value.type;
    this.contractForUpdate.status = this.updateForm.form.value.status;
    this.contractForUpdate.startDate = this.strToDate(this.updateForm.form.value.startDate);
    this.contractForUpdate.endDate = this.strToDate(this.updateForm.form.value.endDate);
    
    this.contractsService.updateContracts(this.contractForUpdate);
    this.router.navigate(['/admin', {outlets: {primary:[], 'adminlistcontent':['companies', this.company_id, 'jobrequests', this.contractForUpdate.jobRequest_id, 'contracts']}}]);
  }

  private strToDate(strDate): Date{
    let day = parseInt(strDate.substring(0,2));
    let month = parseInt(strDate.substring(3,5));
    let year = parseInt(strDate.substring(6,10));

    return new Date(year,month-1, day);
  }

}
