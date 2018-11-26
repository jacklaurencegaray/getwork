import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contract } from 'src/app/shared/contract.model';
import { ContractsService } from '../contracts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { Company } from 'src/app/shared/company.model';

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
    // parameters here are only temporary! TEST
    this.newContract = new Contract(
      20,
      new JobRequest(
        4,
        '15101138101',
        new Date(),
        new Date(),
        new Company(1,
          new Date(),
          new Date(), 
          'carloski', 
          'France de Guatero', 
          'versace.com', 
          '09452186422', 
          'versace@gmail.com', 
          'versace'),
        this.createForm.form.value.status,
        this.createForm.form.value.description,
        this.createForm.form.value.startDate,
        this.createForm.form.value.endDate,
        null
      ),
      new Date(),
      new Date(),
      '15101138101',
      this.createForm.form.value.type,
      this.createForm.form.value.contractorName,
      this.createForm.form.value.startDate,
      this.createForm.form.value.endDate,
      this.createForm.form.value.status
    );
    this.contractsService.createContract(this.newContract).subscribe(
      (response: any) => {
        console.log(response);
        this.contractsService.contractsChanged.emit([]);
      }, (error) => {
            console.log(error);
      }
    );
    this.router.navigate(['/test', {outlets: {primary:[], 'listcontent':['jobrequests', this.newContract.jobRequest.id, 'contracts']}}]);
  }

  private strToDate(strDate): Date{
    let day = parseInt(strDate.substring(0,2));
    let month = parseInt(strDate.substring(3,5));
    let year = parseInt(strDate.substring(6,10));

    return new Date(year,month-1, day);
  }
}
