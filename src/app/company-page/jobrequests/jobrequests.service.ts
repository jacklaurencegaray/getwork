import { JobRequest } from "src/app/shared/jobrequest.model";
import { EventEmitter } from "@angular/core";

export class JobRequestService{
    private jobRequests: JobRequest[] = [
        new JobRequest(1, 'Fenty Beauty', 'New', 'jack', 'a boy', new Date(), new Date(), new Date()),
        new JobRequest(2, 'Kylioe', 'Active', 'carlo', 'a boy', new Date(), new Date(), new Date()),
        new JobRequest(3, 'Zalora', 'Inactive', 'thessa', 'a girl', new Date(), new Date(), new Date())
    ];
    
    jobRequestSelected = new EventEmitter<JobRequest>();
    jobRequestsChanged = new EventEmitter<JobRequest[]>();
    getJobRequests(){
        return this.jobRequests.slice();
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

    updateJobRequest(updatedJobRequest: JobRequest){
        let ndx = this.jobRequests.findIndex(
            obj => obj.id === updatedJobRequest.id
        );

        this.jobRequests[ndx] = updatedJobRequest;
        this.jobRequestsChanged.emit(this.jobRequests.slice());
    }
}