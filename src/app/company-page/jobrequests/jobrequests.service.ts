import { JobRequest } from "src/app/shared/jobrequest.model";
import { EventEmitter } from "@angular/core";

export class JobRequestService{
    private jobRequests: JobRequest[] = [
        new JobRequest(1, 'jack', 'a boy', new Date(), new Date(), new Date()),
        new JobRequest(2, 'carlo', 'a boy', new Date(), new Date(), new Date()),
        new JobRequest(3, 'thessa', 'a girl', new Date(), new Date(), new Date())
    ];
    
    jobRequestSelected = new EventEmitter<JobRequest>();

    getJobRequests(){
        return this.jobRequests.slice();
    }
}