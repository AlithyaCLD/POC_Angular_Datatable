export interface IGenericDataSource {
    load(pageIndex:number,
        pageSize:number,
        sortField: string,
        sortDir: string,
        search: string);
}