export class Company {
    constructor(public id: number,
        public creationDate: Date,
        public modificationDate: Date,
        public companyName: string,
        public address: string,
        public companyUrl: string,
        public telephoneNumber: string,
        public email: string,
        public password: string){

    }
}