import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from '../shared/services/auth.service';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { UserService } from '../shared/services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../shared/helpers/Jwt.Interceptor';
import { ErrorInterceptor } from '../shared/helpers/error-interceptor';
import { AuthModule } from '../auth/auth.module';
import { CoreComponent } from './core.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesSectionComponent } from './home/services-section/services-section.component';
import { LoaderService } from '../shared/services/loader-service.service';
import { LoaderInterceptor } from '../shared/helpers/loader.interceptor';
import { ToastComponent } from './toast/toast.component';
import { ToastService } from '../shared/services/toast.service.';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, PageNotFoundComponent,
     CoreComponent, ServicesSectionComponent, ToastComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthModule,
    CoreRoutingModule,
    NgbModule,
    SharedModule
  ],
  providers:[
    AuthService,
    AuthGuardService,
    UserService,
    LoaderService,
    ToastService,
    {provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}
  ],
  exports:[
    CoreComponent,
    ToastComponent
  ]
})
export class CoreModule { }
