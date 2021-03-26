import { BehaviorSubject } from "rxjs";

export class LoaderService {
  public isLoading=new BehaviorSubject<boolean>(false);
  public isBackgroundLoading=new BehaviorSubject<boolean>(false);
  constructor() { }
}
