import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavigationService implements OnInit {
  headerData: [];
  getData: [];

  private loginUrl = 'http://20.198.105.99';
  private baseUrl = 'http://20.198.105.99/user-api';
  //http://20.198.105.99/user-api/users/logIn
  private mortgageUrl = 'http://20.198.105.99/mortgage-api';

  private _valuationDataSource = new BehaviorSubject<any>("No data");
  valuatinData$ = this._valuationDataSource.asObservable();

  private _propertyDataSource = new BehaviorSubject<any>("No data");
  _propertyDataSource$ = this._propertyDataSource.asObservable();


  private _paymentDataSource = new BehaviorSubject<any>("No data");
  _paymentDataSource$ = this._paymentDataSource.asObservable();

  private _occupantsDataSource = new BehaviorSubject<any>("No data");
  _occupantsDataSource$ = this._occupantsDataSource.asObservable();

  constructor(private router: Router, private httpClient: HttpClient, private spinner: NgxSpinnerService, ) {
    router.events.subscribe(() => {
      this.setShowNav(false);
    });
  }

  public authenticate(formData: FormGroup): Observable<any> {
    const url = `${this.loginUrl}/authenticate`;
    // const url = `${this.baseUrl}/users/logIn`;
    return this.httpClient.post(url, formData);
    // console.log("formData====>",formData);
  }

  public addPayment(formData: FormGroup): Observable<any> {
    console.log(formData,"payment data");
    const url = `${this.mortgageUrl}/api/payment-details`;
    return this.httpClient.post(url, formData);
  }
  public registerUser(formData: FormGroup): Observable<any> {
    const url = `${this.baseUrl}/users/register`;
    return this.httpClient.post(url, formData);
  }

  private showNav$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public addProperty(formData: FormGroup): Observable<any> {
    const url = `${this.mortgageUrl}/api/propertyDetails`;
    return this.httpClient.post(url, formData);
  }

  getValuationData(mydata) {
    this._valuationDataSource.next(mydata);
  }

  getPropertyData(prepertyData){
    this._propertyDataSource.next(prepertyData);

  }

  getPaymentData(paymentData){
    this._paymentDataSource.next(paymentData);

  }

  getDataFromOccupants(occupantsData) {
    this._occupantsDataSource.next(occupantsData);
   
  }
 
  ngOnInit() {
   
  }

  setHeaderData(data){
   this.headerData=data;
   console.log("Service data from login cmp",this.headerData )
  }

  getHeaderData(){
    return this.headerData;
    console.log("Service data from login cmp",this.headerData )
   
  }
  getShowNav(){
    return this.showNav$.asObservable();
  }

  setShowNav(showHide: boolean) {
    this.showNav$.next(showHide);
  }

  toggleNavState() {
    this.showNav$.next(!this.showNav$.value);
  }

  isNavOpen() {
    return this.showNav$.value;
  }

  isUserLoggedIn() {	
    let user = sessionStorage.getItem('token')	
    //console.log(!(user === null))	
    return !(user === null)	
  }	
  getLoggedUser(): any{	
    return sessionStorage.getItem('token');	
  }

  getDataFromPropertyDetails(propertyForm: FormGroup) {
    console.log("service");
    console.log(propertyForm);
    alert('Details Saved Successfully');
    this.addProperty(propertyForm);
  }
 
}
