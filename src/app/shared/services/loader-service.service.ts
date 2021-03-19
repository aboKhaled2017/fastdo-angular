import { BehaviorSubject } from "rxjs";

export class LoaderService {
  public isLoading=new BehaviorSubject<boolean>(false);
  constructor() { }
}
