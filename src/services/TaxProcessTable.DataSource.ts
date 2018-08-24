
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {TaxProcessTable} from "../models/TaxProcessTable/TaxProcessTable";
import {TaxProcessTableService} from "./TaxProcessTable.service";
import {BehaviorSubject, Observable, of} from "rxjs";
import {catchError, finalize} from "rxjs/operators";
import {GenericDataSource} from "./GenericDataSource"

export class TaxProcessTableDataSource extends GenericDataSource<TaxProcessTable> {

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private taxProcessTableService: TaxProcessTableService) {
        super();
    }

    load(
        pageIndex:number = 0,
        pageSize:number = 1000,
        sortField:string = '',
        sortDir:string = 'asc',
        search:string = '') {

        this.loadingSubject.next(true);

        this.taxProcessTableService
            .findTaxProcesses(pageIndex, pageSize, sortField, sortDir, search)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(taxProcesses => this.subject.next(taxProcesses),
                        err => console.error(err));
    }

    connect(collectionViewer: CollectionViewer): Observable<TaxProcessTable[]> {
        console.log("Connecting data source");
        return this.subject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.subject.complete();
        this.loadingSubject.complete();
    }
}

