import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contract } from 'src/app/shared/contract.model';
import { ContractsService } from '../contracts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.scss']
})
export class ContractCreateComponent implements OnInit {

  @ViewChild("f") createForm: NgForm;
  newContract: Contract;

  constructor(private contractsService: ContractsService,
    private adminNavbarService: AdminNavbarService,
    private route: ActivatedRoute,
    private router: Router){

  }
  
  ngOnInit() {
  }
  
  createContract(){
    this.newContract = new Contract(
      Math.floor(Math.random() * (50000 - 5 + 1)) + 5,
      +this.route.snapshot.params['id'],
      this.createForm.form.value.type,
      this.createForm.form.value.contractorName,
      this.strToDate(this.createForm.form.value.startDate),
      this.strToDate(this.createForm.form.value.endDate),
      this.createForm.form.value.status
    );
    this.contractsService.addContract(this.newContract);
    this.router.navigate(['/test', {outlets: {primary:[], 'listcontent':['jobrequests', this.newContract.jobRequest_id, 'contracts']}}]);
  }

  private strToDate(strDate): Date{
    let day = parseInt(strDate.substring(0,2));
    let month = parseInt(strDate.substring(3,5));
    let year = parseInt(strDate.substring(6,10));

    return new Date(year,month-1, day);
  }
}
