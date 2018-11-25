import { EventEmitter } from "@angular/core";

export class AdminNavbarService{
    activeLinks: string[];
    
    linkChanged = new EventEmitter<string[]>();

    changeLink(paths: string[]){
        this.activeLinks = paths.slice();
        this.linkChanged.emit(paths);
    }
}    