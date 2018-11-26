import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contract } from 'src/app/shared/contract.model';
import { ContractsService } from '../contracts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminNavbarService } from 'src/app/admin-navbar/admin-navbar.service';
import { JobRequest } from 'src/app/shared/jobrequest.model';
import { Company } from 'src/app/shared/company.model';
import { CompanyService } from 'src/app/admin-page/companies/companies.service';
import { JobRequestService } from '../jobrequests.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.scss']
})
export class ContractCreateComponent implements OnInit {

  @ViewChild("f") createForm: NgForm;
  newContract: Contract;
  currentJobRequest: JobRequest;
  currentCompany: Company;

  constructor(private contractsService: ContractsService,
    private adminNavbarService: AdminNavbarService,
    private jobRequestService: JobRequestService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router){

  }
  
  ngOnInit() {
    this.companyService.getCompanyByName(this.route.parent.snapshot.params['companyName']).subscribe(
      (company: any) => {
        this.currentCompany = company;
        this.jobRequestService.getJobRequestById(this.currentCompany.id,+this.route.snapshot.params['id']).subscribe(
          (jobRequest: any) => {
            this.currentJobRequest = jobRequest;
          }, (error) => {
            console.log(error);
          }
        );
      }, (error) => {
        console.log(error)
      }
    );
  }
  
  createContract(){
    // parameters here are only temporary! TEST
    this.newContract = new Contract(
      20,
      this.currentJobRequest,
      new Date(),
      new Date(),
      '15101138112',
      this.createForm.form.value.type,
      this.createForm.form.value.contractorName,
      this.createForm.form.value.startDate,
      this.createForm.form.value.endDate,
      this.createForm.form.value.status
    );
    console.log(this.currentJobRequest.id);
    this.contractsService.createContract(this.newContract).subscribe(
      (response: any) => {
        console.log(response);
        this.contractsService.contractsChanged.emit([]);
      }, (error) => {
            console.log(error);
      }
    );
    this.router.navigate(['/'+this.currentCompany.companyName, {outlets: {primary:[], 'listcontent':['jobrequests', this.newContract.jobRequest.id, 'contracts']}}]);
  }

  private strToDate(strDate): Date{
    let day = parseInt(strDate.substring(0,2));
    let month = parseInt(strDate.substring(3,5));
    let year = parseInt(strDate.substring(6,10));

    return new Date(year,month-1, day);
  }
}
