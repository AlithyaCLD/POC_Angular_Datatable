import { Component, ViewChild, Input, AfterViewInit, OnInit } from '@angular/core';
import { MatTable, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { fromEvent, merge } from "rxjs";
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';

import { IGenericDataSource } from "../../services/IGenericDataSource"
import { DataTableDefinition, ColumnDefinition } from "../../services/DataTableDefinition";
import { TaxProcessTable } from "../../models/TaxProcessTable/TaxProcessTable";

@Component({
  selector: 'material-datatable',
  templateUrl: './material.datatable.component.html',
  styleUrls: ['./material.datatable.component.css']
})

export class MaterialDatatableComponent implements OnInit, AfterViewInit {
    @Input() dataSource: IGenericDataSource;
    @Input() dtDef: DataTableDefinition
    title = 'MaterialDatatable';

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() : void {
        this.load();
    }

    ngAfterViewInit() {
        //this.dataSource.length

    /*    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        fromEvent(this.input.nativeElement,'keyup')
            .pipe(
                debounceTime(150),
                distinctUntilChanged(),
                tap(() => {
                    this.paginator.pageIndex = 0;

                    this.load();
                })
            )
            .subscribe();
*/
        merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            tap(() => this.load())
        )
        .subscribe();
    }

    load() {
        this.dataSource.load(0, 1000, this.sort.active, this.sort.direction, '');
    }

}
