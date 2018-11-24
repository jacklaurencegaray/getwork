export class Contract{
    constructor(public id: number,
        public owner_id: number,
        public type: string,
        public contractorName: string,
        public startDate: Date,
        public endDate: Date,
        public status: string){

    }
}