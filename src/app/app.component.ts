import { Component } from '@angular/core';
import { TaxProcessTableDataSource } from "../services/TaxProcessTable.datasource";
import { TaxProcessTableService } from "../services/TaxProcessTable.service";
import { DataTableDefinition, ColumnDefinition } from "../services/DataTableDefinition";
//import { MaterialDatatableComponent } from '../components/MaterialDatatable/material.datatable.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PocDataTable';

  taxProcessTableDataSource: TaxProcessTableDataSource;
  dtDef: DataTableDefinition = new DataTableDefinition();

  constructor(private taxProcessTableService: TaxProcessTableService) {
  }

  ngOnInit() : void {

    this.dtDef.columns = [
      new ColumnDefinition('Monthly Period', 'monthlyPeriod', true),
      new ColumnDefinition('Account', 'account', true),
      new ColumnDefinition('Company Code', 'companyCode', true),
      new ColumnDefinition('FirstName', 'firstName', true),
      new ColumnDefinition('LastName', 'lastName', true),
      new ColumnDefinition('Loc Curr 253 re', 'locCurr253re', false)
    ];

    this.taxProcessTableDataSource = new TaxProcessTableDataSource(this.taxProcessTableService);
  }
}