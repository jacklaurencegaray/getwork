export class JobRequest {
    constructor(public id: number, 
        public contact: string,
        public description: string,
        public startData: Date,
        public endDate: Date,
        public expiryDate: Date){}
}