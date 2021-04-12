import { E_drug_requestStatus } from '../../../shared/enums/enums';
import { E_PharmacyStoreComponentType } from './enums';

export interface IPharmacyStkComponentType{
 type:E_PharmacyStoreComponentType
}

export interface IPharmacySearchStkResponseModel{
    address: string
    addressInDetails: string|null
    areaId: number
    drugsCount: number
    id: string
    joinedPharmesCount: number
    landlinePhone: string
    name: string
    persPhone: string
}
export interface IPharmacyRequestedStkResponseModel {
    address: string
    addressInDetails: string|null
    landLinePhone: string
    name: string
    persPhone: string
    seen: boolean
    status: E_drug_requestStatus
    stockId: string
}
export interface IPhamacyContractedStkResponseModel {
    address: string
    addressInDetails: string|null
    landeLinePhone: string
    name: string
    phoneNumber:string
    stockId:string
}