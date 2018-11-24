import { JobRequest } from "src/app/shared/jobrequest.model";
import { EventEmitter } from "@angular/core";
import { Contract } from "src/app/shared/contract.model";

export class ContractsService {
    private contracts: Contract[] = [
        new Contract(1,1,'poster','jacko', new Date(), new Date(), 'ONGOING'),
        new Contract(2,1,'Ad','shema', new Date(), new Date(), 'ONGOING'),
        new Contract(3,2,'industrial','gema', new Date(), new Date(), 'ONGOING'),
        new Contract(4,2,'billboard','kwima', new Date(), new Date(), 'ONGOING'),
        new Contract(5,2,'poster','silma', new Date(), new Date(), 'DONE'),
        new Contract(6,3,'Ad','demado', new Date(), new Date(), 'ONGOING'),
        new Contract(7,3,'industrial','shimba', new Date(), new Date(), 'ONGOING')
    ];
    
    contractSelected = new EventEmitter<Contract>();
    contractsChanged = new EventEmitter<Contract[]>();
    getContracts(user_id: number){
        return this.getContractsByOwner(this.contracts,user_id).slice();
        //return this.contracts.slice();
    }

    addContract(contract: Contract){
        this.contracts.push(contract);
        this.contractsChanged.emit(this.contracts.slice());
    }

    getContractById(id:number){
        return this.contracts.find(
            obj => {
                return obj.id === id;
            }
        );
    }

    updateContracts(updatedContract: Contract){
        let ndx = this.contracts.findIndex(
            obj => obj.id === updatedContract.id
        );

        this.contracts[ndx] = updatedContract;
        this.contractsChanged.emit(this.contracts.slice());
    }

    deleteContract(id:number){
        let ndx = this.contracts.findIndex(
            obj => obj.id === id
        );

        this.contracts.splice(ndx,1);
        this.contractsChanged.emit(this.contracts.slice());
    }

    getContractsByOwner(contracts: Contract[], owner_id: number){
        return contracts.filter(
            (obj) => {
               for(let key in obj){
                    if(obj['owner_id'] === owner_id){
                        return obj;
                    }
               }
            }
        );
    }
}