import { Injectable } from "@angular/core";

@Injectable()
export class CommonUtilityService {

  constructor() { }
   convertStrToCamleCseString(str:string){
   return `${str.charAt(0).toLocaleLowerCase()}${str.slice(1)}`;
  }
  convertObjPropsToCamleCseString(obj){
   const newObj={};
   for(let prop in obj){
   newObj[this.convertStrToCamleCseString(prop)]=obj[prop];
   }
   return newObj;
  }
}
