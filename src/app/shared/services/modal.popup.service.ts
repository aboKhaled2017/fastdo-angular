import { Injectable } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from "../components/confirm-modal/confirm-modal.component";

@Injectable()
export class ModalPopupservice{

    constructor(private modalService: NgbModal){}
    openDeleteModal(obj:{deletedItem?:string,deletedType?:string,message?:string}) {
        const modelRef= this.modalService.open(ConfirmModalComponent,{
          
        });
         modelRef.componentInstance['deletedType']=obj.deletedType || "الراكد";
        if(obj.deletedItem) modelRef.componentInstance["deletedName"]=obj.deletedItem;
        if(obj.message) modelRef.componentInstance['message']=obj.message;
         return modelRef;
    }
}