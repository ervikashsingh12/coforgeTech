import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavContentComponent } from './components/side-nav-content/side-nav-content.component';
import { ApplyComponentComponent } from './pages/apply-component/apply-component.component';
import { MortgageOptionsComponent } from './pages/mortgage-options/mortgage-options.component';
import { ConfirmMortgageComponent } from './pages/confirm-mortgage/confirm-mortgage.component';
import { PropertyDetailsComponent } from './pages/property-details/property-details.component';
import { ValuationComponent } from './pages/valuation/valuation.component';
import { OtherOccupantsComponent } from './pages/other-occupants/other-occupants.component';
import { PaymentDetailsComponent } from './pages/payment-details/payment-details.component';
import { ReviewSubmitComponent } from './pages/review-submit/review-submit.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpInterceptorService} from './services/http-interceptor.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxCaptchaModule } from 'ngx-captcha';

import {RECAPTCHA_SETTINGS, RecaptchaModule, RecaptchaSettings} from 'ng-recaptcha';


const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatTreeModule,
  MatBadgeModule,
  MatGridListModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatExpansionModule
];
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    SideNavContentComponent,
    ApplyComponentComponent,
    MortgageOptionsComponent,
    ConfirmMortgageComponent,
    PropertyDetailsComponent,
    ValuationComponent,
    OtherOccupantsComponent,
    PaymentDetailsComponent,
    ReviewSubmitComponent,
    FooterComponent,
    LoginComponent,
    RegisterUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    NgxSpinnerModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    ...materialModules,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxCaptchaModule,
    RecaptchaModule,
  ],
  exports: [
    ...materialModules
  ],
  providers: [	   
     {	
    provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true	
  },
  {
    provide: RECAPTCHA_SETTINGS,
    useValue: { siteKey: '6LeOhiEbAAAAAGGEvpskeEZ6zFWAWMxCCC9rKx64' } as RecaptchaSettings,
  }
],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
 
})
export class AppModule { }
