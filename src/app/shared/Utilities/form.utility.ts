export class CommonFormUtility {
   public static setErrors(error,errorsObj,form,gErrorProp='g'){
        for(let prop in error){
          let val=error[prop];
          errorsObj[prop]=(typeof(val)=="string")?[val]:val;
          let ctrl=form.get(prop);
          if(ctrl){
            ctrl.markAsTouched();
            ctrl.setErrors({
              [gErrorProp]:true
            });
          }
        }
   }
}