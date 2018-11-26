import { JobRequest } from "src/app/shared/jobrequest.model";
import { EventEmitter, Injectable } from "@angular/core";

import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class JobRequestService{
    private jobRequests: JobRequest[];

    constructor(private http: Http){
    }
    
    jobRequestSelected = new EventEmitter<JobRequest>();
    jobRequestsChanged = new EventEmitter<JobRequest[]>();

    getJobRequests(company_id: number){
        return this.http.get("http://localhost:8090/getwork/"+company_id+"/jobrequests")
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
    
    createJobRequest(jobRequest: any){
        let url: string = "http://localhost:8090/getwork/"+jobRequest.company.id+"/jobrequests/create";
        console.log(url);
        return this.http.post(url, jobRequest);
    }
    
    getJobRequestById(company_id: number, req_id: number){
        return this.http.get("http://localhost:8090/getwork/"+company_id+"/jobrequests/"+req_id)
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

    updateJobRequest(updatedJobRequest: JobRequest){
        let url: string = "http://localhost:8090/getwork/"+updatedJobRequest.company.id+"/jobrequests/"+updatedJobRequest.id+"/update";
        return this.http.post(url, updatedJobRequest);
    }

    deleteJobRequest(companyName: string, companyId: number, request_id:number){
        let url: string = "http://localhost:8090/"+companyName+"/"+companyId+"/jobrequests/"+request_id;
        return this.http.delete(url);
    }
    
    // deleteJobRequest(id:number){
    //     let ndx = this.jobRequests.findIndex(
    //         obj => obj.id === id
    //     );

    //     this.jobRequests.splice(ndx,1);
    //     this.jobRequestsChanged.emit(this.jobRequests.slice());
    // }

    // updateJobRequest(updatedJobRequest: JobRequest){
    //     let ndx = this.jobRequests.findIndex(
    //         obj => obj.id === updatedJobRequest.id
    //     );

    //     this.jobRequests[ndx] = updatedJobRequest;
    //     this.jobRequestsChanged.emit(this.jobRequests.slice());
    // }

    getJobRequestsByCompanyId(company_id: number){
        return this.filterJobRequests(this.jobRequests, company_id).slice();
    }

    addJobRequest(jobRequest: JobRequest){
        this.jobRequests.push(jobRequest);
        this.jobRequestsChanged.emit(this.jobRequests.slice());
    }
    
    filterJobRequests(jobRequests: JobRequest[], company_id: number){
        return jobRequests.filter(
            (obj) => {
               for(let key in obj){
                    if(obj['companyId'] === company_id){
                        return obj;
                    }
               }
            }
        );
    }
}