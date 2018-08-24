export class DataTableDefinition {

    columns: ColumnDefinition[];
    pageSizeOptions: number[] = [5, 10, 20];
    pageSize: number = 5;
    paging: boolean = true;
    sorting: boolean = true;
    searching: boolean = true;

    constructor(){
    }

    displayedColumns(){
        return this.columns ? this.columns.filter(element => element.visible).map(element => element.name) : undefined;
    }
}

export class ColumnDefinition {

    title:string;
    name:string;
    visible:boolean;

    constructor(title:string, name:string, visible:boolean){
        this.title = title;
        this.name = name;
        this.visible = visible;
    }

}