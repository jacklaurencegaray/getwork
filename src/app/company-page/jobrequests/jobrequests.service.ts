import { JobRequest } from "src/app/shared/jobrequest.model";
import { EventEmitter } from "@angular/core";

export class JobRequestService{
    private jobRequests: JobRequest[] = [
        new JobRequest(1, 1, 'Fenty Beauty', 'New', 'jack', 'a boy', new Date(), new Date(), new Date()),
        new JobRequest(2, 2, 'Kylioe', 'Active', 'carlo', 'a boy', new Date(), new Date(), new Date()),
        new JobRequest(3, 3, 'Zalora', 'Inactive', 'thessa', 'a girl', new Date(), new Date(), new Date())
    ];
    
    jobRequestSelected = new EventEmitter<JobRequest>();
    jobRequestsChanged = new EventEmitter<JobRequest[]>();
    getJobRequests(){
        return this.jobRequests.slice();
    }
    
    getJobRequestsByCompanyId(company_id: number){
        return this.filterJobRequests(this.jobRequests, company_id).slice();
    }

    addJobRequest(jobRequest: JobRequest){
        this.jobRequests.push(jobRequest);
        this.jobRequestsChanged.emit(this.jobRequests.slice());
    }

    getJobRequestById(id:number){
        return this.jobRequests.find(
            obj => {
                return obj.id === id;
            }
        );
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

    updateJobRequest(updatedJobRequest: JobRequest){
        let ndx = this.jobRequests.findIndex(
            obj => obj.id === updatedJobRequest.id
        );

        this.jobRequests[ndx] = updatedJobRequest;
        this.jobRequestsChanged.emit(this.jobRequests.slice());
    }

    deleteJobRequest(id:number){
        let ndx = this.jobRequests.findIndex(
            obj => obj.id === id
        );

        this.jobRequests.splice(ndx,1);
        this.jobRequestsChanged.emit(this.jobRequests.slice());
    }
}