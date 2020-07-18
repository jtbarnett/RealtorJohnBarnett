import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RentalApplicationComponent } from './components/rental-application/rental-application.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { RentalApplicationFormComponent } from './components/rental-application-form/rental-application-form.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CookieModule } from 'ngx-cookie';
import { CookieService } from 'ngx-cookie-service';
import { CookieGeneratorService } from './services/cookie-generator.service';
import { ModalService } from './services/modal.service';
import { PaymentModalService } from './services/payment-modal.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFoundComponent,
    RentalApplicationComponent,
    RentalApplicationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPayPalModule,
    CookieModule.forRoot()
  ],
  providers: [
    AuthGuardService,
    AuthService,
    CookieService,
    CookieGeneratorService,
    ModalService,
    PaymentModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
