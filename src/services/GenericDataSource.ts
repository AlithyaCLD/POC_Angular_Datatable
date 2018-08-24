import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {BehaviorSubject, Observable, of} from "rxjs";
import {IGenericDataSource} from "./IGenericDataSource";
import {MatTableDataSource} from '@angular/material';

export class GenericDataSource<T> extends DataSource<any[]> implements IGenericDataSource {
    subject = new BehaviorSubject<T[]>([]);
    constructor() {
      super ();
    }
    connect (collectionViewer: CollectionViewer): Observable<any[]> {
      return this.subject.asObservable();
    }
    disconnect (collectionViewer: CollectionViewer): void {}
    load (): void {}
}
  