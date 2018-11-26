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
      //parameters are only TEST!
      (params: Params) => {
        this.contractsService.getContractById('carloski',1,+params['id'], +params['contractId']).subscribe(
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
    this.router.navigate(['/test', {outlets: {primary:[], 'listcontent':['jobrequests', this.contractForUpdate.jobRequest.id, 'contracts']}}]);
    this.adminNavbarService.linkChanged.emit(['Job Requests', ''+this.contractForUpdate.jobRequest.id, 'Contracts']);
  }

  private strToDate(strDate): Date{
    let day = parseInt(strDate.substring(0,2));
    let month = parseInt(strDate.substring(3,5));scrollY
    let year = parseInt(strDate.substring(6,10));

    return new Date(year,month-1, day);
  }
}
