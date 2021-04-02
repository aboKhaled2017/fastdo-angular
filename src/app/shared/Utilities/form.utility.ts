export class CommonFormUtility {
   public static setErrors(error,errorsObj,form,gErrorProp='g'){
        for(let prop in error){
          errorsObj[prop]=error[prop];
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