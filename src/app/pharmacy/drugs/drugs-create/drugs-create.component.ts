import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants } from '../../../shared/constnts';
import { LoaderService } from '../../../shared/services/loader-service.service';
import { CommonFormUtility } from '../../../shared/Utilities/form.utility';
import { CustomValidators } from '../../../shared/helpers/customValidators';
import { DrugCreateService } from './drug-create.service';
import { ToastService } from '../../../shared/services/toast.service.';
import { IErrorModel } from '../../../shared/models/Error.model';

@Component({
  selector: 'app-drugs-create',
  templateUrl: './drugs-create.component.html',
  styleUrls: ['./drugs-create.component.scss'],
  providers:[DrugCreateService]
})
export class DrugsCreateComponent implements OnInit {
  fg:FormGroup;
  allErrors={
    name:{required:'اسم الراكد مطلوب',g:''},
    type:{required:'نوع الراكد مطلوب',g:''},
    quantity:{required:'كمية الراكد مطلوب',g:'',notNumber:'الكمية غير صحيحة'},
    price:{required:'سعر الراكد مطلوب',g:''},
    consumeType:{required:'نوع استهلاك الراكد مطلوب',g:''},
    valideDate:{required:'تاريخ صلاحية الراكد مطلوب',g:''},
    priceType:{required:'نوع سعر الراكد مطلوب',g:''},
    unitType:{required:'نوع وحدة الراكد مطلوب',g:''},
    discount:{required:'نسبة خصم الراكد مطلوب',g:''},
    desc:{required:'وصف الراكد مطلوب',g:''},
  }
  drugsTypes=Constants.lists.drugsTypes;
  drugsUnitTypes=Constants.lists.drugsUnits;
  drugsPriceTypes=Constants.lists.drugsPriceTypes;
  drugsConsumeTypes=Constants.lists.drugsConsumeTypes;
  liveText="";
  private initForm(){
     this.fg=this.fb.group({
      name:this.fb.control('',[Validators.required]),
      type:this.fb.control('',[Validators.required]),
      quantity:this.fb.control('',[Validators.required,Validators.pattern(Constants.numberPattern),
        CustomValidators.intNumber]),
      price:this.fb.control('',[
        Validators.required,
        Validators.pattern(Constants.floatNumberPatter)]),
      consumeType:this.fb.control(this.drugsConsumeTypes[0].value,[Validators.required]),
      valideDate:this.fb.control('',[Validators.required]),
      discount:this.fb.control('',[
        Validators.required,
        Validators.pattern(Constants.floatNumberPatter)]),
      priceType:this.fb.control(this.drugsPriceTypes[0].value,[Validators.required]),
      unitType:this.fb.control('',[Validators.required]),
      desc:this.fb.control('',[Validators.required]),
     });
     this.fg.get('consumeType').disable();
  }
  constructor(private fb:FormBuilder,
              public loaderService:LoaderService,
              private toastService:ToastService,
              private drugCreateService:DrugCreateService) {
    this.initForm();
    this.liveText=drugCreateService.get_liveState_for_addDrug({});
    this.fg.valueChanges.subscribe(val=>{
      this.liveText=drugCreateService.get_liveState_for_addDrug(val);
    });
  }

  ngOnInit(): void {
  }
  get f(){
    return this.fg.controls;
  }
  resetForm(){
    this.fg.reset({
      type:'',
      unitType:'',
      consumeType:this.drugsConsumeTypes[0].value,
      priceType:this.drugsPriceTypes[0].value
    });
  }
  submit(){
    if(this.fg.invalid)return;
    let _value=this.fg.value;
    let _date=_value['valideDate'] as Date;
    _date=new Date(_date['year'],_date['month']-1,_date['day']);
    _value['valideDate']=_date.toISOString();
    this.drugCreateService.addDrug(_value)
    .subscribe(()=>{
      this.resetForm();
      this.toastService.showSuccess("تم اضافة الراكد بنجاح");
    },
    (err:IErrorModel)=>{
      if(err.hasValidationError){
        CommonFormUtility.setErrors(err.error,this.allErrors,this.fg,(obj,prop,val)=>{
          obj[prop]['g']=val;
        });
      }
      else{
        this.toastService.showError(err.message);
      }
    });
  }
}
