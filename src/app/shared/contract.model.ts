import { JobRequest } from "./jobrequest.model";

export class Contract{
    constructor(public id: number,
        public jobRequest: JobRequest,
        public creationDate: Date,
        public modificationDate: Date,
        public contractNumber: string,
        public type: string,
        public contractorName: string,
        public startDate: Date,
        public endDate: Date,
        public status: string){
    }
}