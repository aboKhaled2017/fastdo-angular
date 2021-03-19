import { UserType } from './ILogin';
import { Role } from './Role';
export class User{
    id: string
    userName: string
    email: string
    name:string
    persPhone:string
    landlinePhone:string
    address: string|null
    emailConfirmed: boolean
    userType: UserType

    get getRole(){
        switch(this.userType){
            case UserType.Pharmacier :return Role.pharmacy;
            case UserType.Stocker :return Role.store;
            case UserType.Adminer: return Role.admin;
            default :return Role.pharmacy;
        }
    }
}