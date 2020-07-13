import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RentalApplicationComponent } from './components/rental-application/rental-application.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { MessageSuccessComponent } from './components/message-success/message-success.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'contact-page', component: ContactPageComponent,
    children: [
      { path: 'message-success', component: MessageSuccessComponent }
    ]
  },
  { path: 'rental-application', component: RentalApplicationComponent,
    children: [
      { path: 'payment-success', component: PaymentSuccessComponent }
    ]
  },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
