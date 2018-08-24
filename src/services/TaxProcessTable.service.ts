

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError, of } from "rxjs";
import {map, catchError} from "rxjs/operators";
import {TaxProcessTable} from "../models/TaxProcessTable/TaxProcessTable";

@Injectable({
    providedIn: 'root'
})

export class TaxProcessTableService {

    constructor(private http:HttpClient) {
    }

    findTaxProcesses(   pageNumber:number,
                        pageSize:number,
                        sortField:string,
                        sortDir:string,
                        search:string): Observable<TaxProcessTable[]> {
        return this.http.get('http://localhost:54710/api/PocDataTables', {
            params: new HttpParams()
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
                .set('sortField', sortField)
                .set('sortDir', sortDir)
                .set('search', search)
        })
        .pipe(
            map(res => res),
            catchError(err => of(err.message))
        );
    }
}