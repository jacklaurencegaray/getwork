export class JobRequest {
    constructor(public id: number,
        public tag: string,
        public status: string, 
        public contact: string,
        public description: string,
        public startData: Date,
        public endDate: Date,
        public expiryDate: Date){}
}