import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PageRequestModel } from 'src/app/shared/models/Page.request.model';
import { LoaderService } from 'src/app/shared/services/loader-service.service';
import { PaginatorService } from 'src/app/shared/services/paginator.service';
import { ToastService } from 'src/app/shared/services/toast.service.';
import { IErrorModel } from '../../shared/models/Error.model';
import { ActivatePageService } from '../../shared/services/activatedPage.service';

@Injectable()
export class DrugsRequestsService<TResponseModel> {

  private _onFetchData=new Subject<TResponseModel[]>();
  get onFetchData(){
    return this._onFetchData.asObservable();
  }
  private reqModel=new PageRequestModel({pageSize:2,pageNumber:1});
  constructor(private http:HttpClient,
              private toastService:ToastService,
              public pgService:PaginatorService,
              public activatePageService:ActivatePageService,
              public loadingService:LoaderService) {
  }
  getWhere(props:Partial<PageRequestModel>,type:string){
  if(type=='search') this.getPageOfSearchedStkDrugs(props);
  }
  private getPageOfSearchedStkDrugs(props:Partial<PageRequestModel>){
    let model=this.reqModel.reBuild(null,props);
    let url=model.getFullUrl('pharmas/stkdrugs');
    this.http.get(url).subscribe(data=>{
      this._onFetchData.next(data as any);
    },(err:IErrorModel)=>{
      this.toastService.showError(err.message);
    })
  }
}
