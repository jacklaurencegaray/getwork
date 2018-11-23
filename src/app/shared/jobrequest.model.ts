export class JobRequest {
    constructor(public id: number,
        public displayHandler: string,
        public status: string, 
        public contact: string,
        public description: string,
        public startDate: Date,
        public endDate: Date,
        public expiryDate: Date){}
}