import { Company } from "src/app/shared/company.model";
import { EventEmitter, Injectable } from "@angular/core";

export class CompanyService {
    private companies: Company[] = [
        new Company(1,'Versace','Italia Romano', '0944223222','versace.com', 'versace@gmail.com'),
        new Company(2,'Dolce','France Paris', '55523216','dolce.com', 'dolce@gmail.com'),
        new Company(3,'Gabana','Boutiq de Greek', '90223152','gabana.com', 'gabana@gmail.com')
    ];

    companySelected = new EventEmitter<Company>();
    companiesChanged = new EventEmitter<Company[]>();

    getCompanies(){
        return this.companies.slice();
    }

    addCompany(company: Company){
        this.companies.push(company);
        this.companiesChanged.emit(this.companies.slice());
    }

    getCompanyById(id:number){
        return this.companies.find(
            obj => {
                return obj.id === id;
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