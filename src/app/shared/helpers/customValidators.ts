import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators{
    static match(target: AbstractControl){
        return (control:AbstractControl):ValidationErrors=>{
            if(control.value!=target.value){
                return {
                    match:true
                }
            }
            return null;
        }
    }
}