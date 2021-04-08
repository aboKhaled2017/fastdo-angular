import { IGeneralPagination } from '../../../shared/models/IPagination.model';
export interface IDrugRequestModel{
    pageNumber:number 
    pageSize?:number 
    s?:string
}
export class  DrugRequestModel implements IDrugRequestModel{
    constructor(pg:IGeneralPagination,s?:string) {
        this.pageNumber=pg.currentPage || 1;
        this.pageSize=pg.pageSize || 1;
        if(s)this.s=s;
    }
    pageNumber: number;
    pageSize?: number;
    s?: string;
}