import { Component, OnInit, ViewChild } from '@angular/core';
import { Contract } from 'src/app/shared/contract.model';
import { NgForm } from '@angular/forms';
import { ContractsService } from '../contracts.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';

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

  constructor(private contractsService: ContractsService,
    private route: ActivatedRoute,
    private adminNavbarService: AdminNavbarService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.contractForUpdate = Object.create(this.contractsService.getContractById(+params['contractId']));
      }
    );
    console.log(this.contractForUpdate.startDate);
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
    this.router.navigate(['/test', {outlets: {primary:[], 'listcontent':['jobrequests', this.contractForUpdate.jobRequest_id, 'contracts']}}]);
    this.adminNavbarService.linkChanged.emit(['Job Requests', ''+this.contractForUpdate.jobRequest_id, 'Contracts']);
  }

  private strToDate(strDate): Date{
    let day = parseInt(strDate.substring(0,2));
    let month = parseInt(strDate.substring(3,5));
    let year = parseInt(strDate.substring(6,10));

    return new Date(year,month-1, day);
  }
}
