import { Component, OnInit } from '@angular/core';
import { PaginatorService } from '../../../shared/services/paginator.service';
import { DrugsService } from '../drugs.service';
import { IGeneralPagination } from '../../../shared/models/IPagination.model';
import { DrugRequestModel } from '../Models/drugRequest.model';
import { LoaderService } from '../../../shared/services/loader-service.service';
import { IDrugModel } from '../Models/DrugModel';
import { ITbColModel } from '../../../shared/components/main-table/models/col.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';
import { first } from 'rxjs/operators';
import { ToastService } from '../../../shared/services/toast.service.';
import { IErrorModel } from '../../../shared/models/Error.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DrugsBaseComponent } from '../base.component';
import { ActivatePageService } from 'src/app/shared/services/activatedPage.service';

@Component({
  selector: 'app-drugs-show-list',
  templateUrl: './drugs-show-list.component.html',
  styleUrls: ['./drugs-show-list.component.scss']
})
export class DrugsShowListComponent  extends DrugsBaseComponent {

  pg:IGeneralPagination;
  datalist:IDrugModel[]=[];
  loading:boolean;
  cols:ITbColModel[];
  private setDataList=(data)=>{
    this.datalist=data;
  }
  private getCols():ITbColModel[]{
   return [
    {name:'الاسم',cols:2,propName:'name',classList:'notArabicFont'},
    {name:'النوع',cols:1,propName:'type'},
    {name:'السعر',cols:1,propName:'price'},
    {name:'الكمية',cols:1,propName:'quantity'},
    {name:'التحكم',cols:1,propName:null,display:true},
  ];
  }
  constructor(private paginatorService:PaginatorService,
              private drugsService:DrugsService,
              public loaderService:LoaderService,
              private modalService:NgbModal,
              private toastService:ToastService,
              public router:Router,
              public activepageService: ActivatePageService,
              private route:ActivatedRoute) {
                super(activepageService,router);
      loaderService.isLoading.subscribe(e=>this.loading=e);
      this.paginatorService.paginator.subscribe(_pg=>{
        this.pg=_pg;
      });
      this.onRefresh(); 
      this.cols=this.getCols();
  }

  onPageSelected(page){
    this.drugsService.getPageOfDrugs(new DrugRequestModel({...this.pg,currentPage:page}))
    .subscribe(this.setDataList);
  }
  onRefresh(){
    this.drugsService.getPageOfDrugs(new DrugRequestModel(this.pg))
    .subscribe(this.setDataList);
  }
  onPageSizeSelected(pageSize){
    this.drugsService.getPageOfDrugs(new DrugRequestModel({...this.pg,pageSize:pageSize,currentPage:1}))
    .subscribe(this.setDataList);
  }
  onEdit(id){
    this.router.navigate(['../edit',id],{relativeTo:this.route})
  }
  onDelete(id){
    let drug=this.datalist.find(e=>e.id==id);
    this.openDeleteModal(drug?.name)
    .result.then((result) => {
     this.drugsService.deleteDrug(id)
     .pipe(first())
     .subscribe(()=>{
      this.toastService.showSuccess("تم حذف الراكد بنجاح");
      this.onRefresh();
     },(err:IErrorModel)=>{
       this.toastService.showError(err.message);
     })
    }, (reason) => {
    });
  }
  private openDeleteModal(name) {
   const modelRef= this.modalService.open(ConfirmModalComponent,{
     
   });
    modelRef.componentInstance['deletedType']="الراكد";
    modelRef.componentInstance["deletedName"]=name;
    return modelRef;
  }
}
