import { Company } from "src/app/shared/company.model";
import { EventEmitter, Injectable } from "@angular/core";

import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class CompanyService {
    private companies: Company[];

    companySelected = new EventEmitter<Company>();
    companiesChanged = new EventEmitter<Company[]>();
    
    constructor(private http: Http){

    }
    // getCompanies(){
    //     return this.companies.slice();
    // }

    getCompanies(){
        return this.http.get("http://localhost:8090/getwork/admin/companies")
        .map(
            (response) => {
                return response.json();
            }
        )
        .catch(
            (error: Response) => {
                return Observable.throw('something went wrong');
            }
        );
    }

    addCompany(company: Company){
        this.companies.push(company);
        this.companiesChanged.emit(this.companies.slice());
    }

    // getCompanyById(id:number){
    //     return this.companies.find(
    //         obj => {
    //             return obj.id === id;
    //         }
    //     );
    // }
    
    getCompanyById(company_id: number){
        return this.http.get("http://localhost:8090/getwork/admin/companies/"+company_id)
        .map(
            (response) => {
                return response.json();
            }
        )
        .catch(
            (error: Response) => {
                return Observable.throw('something went wrong');
            }
        );
    }

    updateCompany(updatedCompany: Company){
        let ndx = this.companies.findIndex(
            obj => obj.id === updatedCompany.id
        );

        this.companies[ndx] = updatedCompany;
        this.companiesChanged.emit(this.companies.slice());
    }

    deleteCompany(id:number){
        let ndx = this.companies.findIndex(
            obj => obj.id === id
        );

        this.companies.splice(ndx,1);
        this.companiesChanged.emit(this.companies.slice());
    }   
}