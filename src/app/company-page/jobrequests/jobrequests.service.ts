import { JobRequest } from "src/app/shared/jobrequest.model";

export class JobRequestService{
    private jobRequests: JobRequest[] = [
        new JobRequest(1, 'jack', 'a boy', new Date(), new Date(), new Date()),
        new JobRequest(2, 'carlo', 'a boy', new Date(), new Date(), new Date()),
        new JobRequest(3, 'thessa', 'a girl', new Date(), new Date(), new Date())
    ];

    getJobRequests(){
        return this.jobRequests.slice();
    }
}