import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';

import {
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatInputModule
} from "@angular/material";

import { MaterialDatatableComponent } from '../components/MaterialDataTable/material.datatable.component';
import { TaxProcessTableService } from '../services/TaxProcessTable.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MaterialDatatableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatInputModule
  ],
  providers: [TaxProcessTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
