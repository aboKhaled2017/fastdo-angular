import { environment } from "src/environments/environment";
import { CommonHttpUtility } from "../Utilities/http.utility";
import { IGeneralPagination } from "./IPagination.model";

export interface IPageRequestModel{
    pageNumber:number 
    pageSize?:number 
    s?:string
    [key:string]:any
    reBuild:(pg:IGeneralPagination,props?:{[key:string]:any})=>IPageRequestModel
    get:<T>(key:string)=>T
}
export class  PageRequestModel implements IPageRequestModel{
    constructor(config?:Partial<{pageNumber:number,pageSize:number}>) {
        this.setValues(config);
    }
    private setValues(pg:Partial<{pageNumber:number,pageSize:number}>,props?:{[key:string]:any}){
        if(pg){
            this.pageNumber=pg.pageNumber || 1;
            this.pageSize=pg.pageSize || 1;
        }
        Object.entries(props || {}).forEach(e=>{
            this[e[0]]=e[1];
        });
    }
    reBuild(pg:Partial<{pageNumber:number,pageSize:number}>,props?:{[key:string]:any}){
     this.setValues(pg,props);
     return this;
    }
    get<T>(key:string):T{
     return this[key]
    }
    getFullUrl(urlSuffix:string){
        return CommonHttpUtility.constructUrl(`${environment.apiUrl}/${urlSuffix}`,this);
    }
    pageNumber: number;
    pageSize?: number;
    [key: string]: any;
}