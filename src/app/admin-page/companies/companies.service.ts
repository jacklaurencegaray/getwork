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

    constructor(private http: Http) {

    }
    getCompanies() {
        return this.http.get("http://104.248.149.206:8090/getwork/admin/companies")
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

    // addCompany(company: Company){
    //     this.companies.push(company);
    //     this.companiesChanged.emit(this.companies.slice());
    // }

    createCompany(company: any) {
        let url: string = "http://104.248.149.206:8090/getwork/register";
        console.log(url);
        return this.http.post(url, company);
    }

    createJobRequest(jobRequest: any) {
        let url: string = "http://104.248.149.206:8090/getwork/" + jobRequest.company.id + "/jobrequests/create";
        console.log(url);
        return this.http.post(url, jobRequest);
    }

    getCompanyById(company_id: number) {
        return this.http.get("http://104.248.149.206:8090/getwork/admin/companies/" + company_id)
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

    getCompanyByName(companyName: string) {
        return this.http.get("http://104.248.149.206:8090/getwork/admin/companies/getByName/" + companyName)
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

    updateCompany(updatedCompany: Company) {
        let url: string = "http://104.248.149.206:8090/getwork/admin/companies/" + updatedCompany.id + "/update";
        return this.http.post(url, updatedCompany);
    }

    deleteCompany(id: number) {
        let ndx = this.companies.findIndex(
            obj => obj.id === id
        );

        this.companies.splice(ndx, 1);
        this.companiesChanged.emit(this.companies.slice());
    }

}
