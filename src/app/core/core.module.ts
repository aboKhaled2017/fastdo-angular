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



@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, PageNotFoundComponent, CoreComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthModule,
    CoreRoutingModule
  ],
  providers:[
    AuthService,
    AuthGuardService,
    UserService,
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}
  ],
  exports:[
    CoreComponent
  ]
})
export class CoreModule { }
