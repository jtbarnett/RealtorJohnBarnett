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
import { ContactService } from './services/contact.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RentalApplicationComponent } from './components/rental-application/rental-application.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { MessageSuccessComponent } from './components/message-success/message-success.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFoundComponent,
    RentalApplicationComponent,
    PaymentSuccessComponent,
    MessageSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
