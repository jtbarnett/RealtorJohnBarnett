import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RentalApplicationComponent } from './components/rental-application/rental-application.component';
import { RentalApplicationFormComponent } from './components/rental-application-form/rental-application-form.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: {title: 'Realtor John Barnett'} },
  { path: 'contact-page', component: ContactPageComponent, data: {title: 'Contact - Realtor John Barnett'} },
  { path: 'rental-application', component: RentalApplicationComponent, data: {title: 'Rental Application - Realtor John Barnett'} },
  { path: 'rental-application-form', component: RentalApplicationFormComponent, canActivate: [AuthGuardService], data: {title: 'Application Form - Realtor John Barnett'} },
  { path: 'page-not-found', component: PageNotFoundComponent, data: {title: 'Page Not Found'} },
  { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
