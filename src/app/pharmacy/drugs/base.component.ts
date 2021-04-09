import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatePageService } from '../../shared/services/activatedPage.service';

@Component({
    selector:'drugs-base-account',
    template:''
})
export class DrugsBaseComponent{

    constructor(public activepageService: ActivatePageService,
                public router:Router) { 
                    activepageService.setActivePage('drugs',router.url);
                }
    ngOnInit(): void {
    }
}