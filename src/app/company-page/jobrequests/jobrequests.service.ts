import { JobRequest } from "src/app/shared/jobrequest.model";
import { EventEmitter } from "@angular/core";

export class JobRequestService{
    private jobRequests: JobRequest[] = [
        new JobRequest(1, 'Fenty Beauty', 'New', 'jack', 'a boy', new Date(), new Date(), new Date()),
        new JobRequest(2, 'Kylioe', 'Active', 'carlo', 'a boy', new Date(), new Date(), new Date()),
        new JobRequest(3, 'Zalora', 'Inactive', 'thessa', 'a girl', new Date(), new Date(), new Date())
    ];
    
    jobRequestSelected = new EventEmitter<JobRequest>();
    newJobAdded = new EventEmitter<JobRequest>();
    getJobRequests(){
        return this.jobRequests.slice();
    }

    addJobRequest(jobRequest: JobRequest){
        this.jobRequests.push(jobRequest);
        this.newJobAdded.emit(jobRequest);
    }

    getJobRequestById(id:number){
        return this.jobRequests.find(
            obj => {
                return obj.id === id;
            }
        );
    }
}