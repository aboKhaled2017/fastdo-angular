export class BasicUtility {
   public static getDatePickerObjectValue(dateStr:string){
       let d=new Date(dateStr);
       return {
         year:d.getFullYear(),
         month:d.getMonth()+1,
         day:d.getDate()
       }  
   }
}