import { JobRequest } from "src/app/shared/jobrequest.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Contract } from "src/app/shared/contract.model";
import { Http } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
@Injectable()
export class ContractsService {
    private contracts: Contract[];
    
    constructor(private http: Http){

    }
    contractSelected = new EventEmitter<Contract>();
    contractsChanged = new EventEmitter<Contract[]>();
    // getContracts(jobRequest_id: number){
    //     return this.getContractsByJobRequestId(this.contracts,jobRequest_id).slice();
    //     //return this.contracts.slice();
    // }

    getContracts(company_id: number, request_id:number){
        return this.http.get("http://localhost:8090/getwork/"+company_id+"/jobrequests/"+request_id+"/contracts")
        .map(
            (response) => {
                return response.json();
            }
        )
        .catch(
            (error: Response) => {
                return Observable.throw('something went wrong');
            }
        );
    }

    createContract(contract: any){
        let url: string = "http://localhost:8090/getwork/"+contract.jobRequest.company.id+"/jobrequests/"+contract.jobRequest.id+"/contracts/create";
        console.log(url);
        return this.http.post(url, contract);
    }

    getContractById(company_id: number, req_id:number,contract_id: number){
        return this.http.get("http://localhost:8090/getwork/"+company_id+"/jobrequests/"+req_id+"/contracts/"+contract_id)
        .map(
            (response) => {
                return response.json();
            }
        )
        .catch(
            (error: Response) => {
                return Observable.throw('something went wrong');
            }
        );
    }

    updateContracts(updatedContract: Contract){
        let url: string = "http://localhost:8090/getwork/"+updatedContract.jobRequest.company.id+"/jobrequests/"+updatedContract.jobRequest.id+"/contracts/"+updatedContract.id+"/update";
        return this.http.post(url, updatedContract);
    }

    // deleteContract(id:number){
    //     let ndx = this.contracts.findIndex(
    //         obj => obj.id === id
    //     );

    //     this.contracts.splice(ndx,1);
    //     this.contractsChanged.emit(this.contracts.slice());
    // }
    deleteContract(companyId:number, request_id: number, contract_id: number){
        let url: string = "http://localhost:8090/getwork/"+companyId+"/jobrequests/"+request_id+"/contracts/"+contract_id;
        return this.http.delete(url);
    }

    getContractsByJobRequestId(contracts: Contract[], jobRequest_id: number){
        return contracts.filter(
            (obj) => {
               for(let key in obj){
                    if(obj['jobRequest_id'] === jobRequest_id){
                        return obj;
                    }
               }
            }
        );
    }
}