import { Type } from '@angular/core';
import { IGeneralPagination } from '../../../shared/models/IPagination.model';
export interface IDrugRequestModel{
    pageNumber:number 
    pageSize?:number 
    s?:string
    [key:string]:any
    addCriteria:(propName:string)=>IDrugRequestModel
    reBuild:(pg:IGeneralPagination,props?:{[key:string]:any})=>IDrugRequestModel
    get:<T>(key:string)=>T
}
export class  DrugRequestModel implements IDrugRequestModel{
    constructor(pg?:IGeneralPagination,s?:string) {
        if(pg)this.pageNumber=pg.currentPage || 1;
        if(pg)this.pageSize=pg.pageSize || 1;
        if(s)this.s=s;
        this.setValues(pg,{s});
    }
    addCriteria (propName: string){
      this[propName]=undefined;
      return this;
    }
    private setValues(pg:IGeneralPagination,props?:{[key:string]:any}){
        if(pg)this.pageNumber=pg.currentPage || 1;
        if(pg)this.pageSize=pg.pageSize || 1;
        Object.entries(props || {}).forEach(e=>{
            if(e[1])this[e[0]]=e[1];
        });
    }
    reBuild(pg:IGeneralPagination,props?:{[key:string]:any}){
     this.setValues(pg,props);
     return this;
    }
    get<T>(key:string):T{
     return this[key]
    }
    pageNumber: number;
    pageSize?: number;
    s?: string;
    [key: string]: any;
}