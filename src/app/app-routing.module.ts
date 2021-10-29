import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyComponentComponent } from './pages/apply-component/apply-component.component';
import { MortgageOptionsComponent } from './pages/mortgage-options/mortgage-options.component';
import { ConfirmMortgageComponent } from './pages/confirm-mortgage/confirm-mortgage.component';
import { PropertyDetailsComponent } from './pages/property-details/property-details.component';
import { ValuationComponent } from './pages/valuation/valuation.component';
import { OtherOccupantsComponent } from './pages/other-occupants/other-occupants.component';
import { PaymentDetailsComponent } from './pages/payment-details/payment-details.component';
import { ReviewSubmitComponent } from './pages/review-submit/review-submit.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'apply', component: ApplyComponentComponent, canActivate: [ AuthGuard ]},
  {path: 'mortgageoptions',component: MortgageOptionsComponent, canActivate: [ AuthGuard ]},
  {path: 'confirm', component: ConfirmMortgageComponent, canActivate: [ AuthGuard ]},
  {path: 'details', component: PropertyDetailsComponent, canActivate: [ AuthGuard ]},
  {path: 'valuation', component: ValuationComponent, canActivate: [ AuthGuard ]},
  {path: 'otherOccupants', component: OtherOccupantsComponent, canActivate: [ AuthGuard ]},
  {path: 'paymantDetails', component: PaymentDetailsComponent, canActivate: [ AuthGuard ]},
  {path: 'reviewSubmit', component: ReviewSubmitComponent, canActivate: [ AuthGuard ]},
  
 
];

@NgModule({
  declarations: [],
  // imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard]
  
})
export class AppRoutingModule { }
