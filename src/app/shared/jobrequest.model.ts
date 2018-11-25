import { Company } from "./company.model";

export class JobRequest {
    constructor(public id: number,
        public jobRequestNumber: string,
        public creationDate: Date,
        public modificationDate: Date,
        public company: Company,
        public status: string, 
        public description: string,
        public startDate: Date,
        public endDate: Date,
        public closedDate: Date){}
}