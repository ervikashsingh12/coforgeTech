import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-review-submit',
  templateUrl: './review-submit.component.html',
  styleUrls: ['./review-submit.component.scss']
})
export class ReviewSubmitComponent implements OnInit {
formValutionData: any;
formPropertyData:any;
formPaymentData:any;
formOccupantsData:any;

disabledAgreement: boolean = true;
changeCheck(event){
  this.disabledAgreement = !event.checked;
}

  constructor(private propertyService: NavigationService, private router: Router, private loader: AppComponent) { }

  ngOnInit(): void {
    this.propertyService.valuatinData$.subscribe(mydata=> this.formValutionData=mydata)
    
    this.propertyService._propertyDataSource$.subscribe(propertydata=> this.formPropertyData=propertydata)
    // console.log("PropetyData",this.formPropertyData)

    this.propertyService._paymentDataSource$.subscribe(paymentdata=> this.formPaymentData=paymentdata)

    this.propertyService._occupantsDataSource$.subscribe(occupantsdata=> this.formOccupantsData=occupantsdata)
    console.log("OccupantsDetails======>", this.formOccupantsData)
  }

  backToproprty(){
  
      this.loader.clickLoader();
      this.router.navigateByUrl('/details');
 
  }

  backToValuation(){
    this.loader.clickLoader();
    this.router.navigateByUrl('/valuation');

}
backToPaymentDetails(){
  this.loader.clickLoader();
  this.router.navigateByUrl('/valuation');

}
backToOccupants(){
  this.loader.clickLoader();
  this.router.navigateByUrl('/otherOccupants');

}
savFinalData =function () {
  this.goSave();
  alert("Successfull uploaded")
  this.loader.showNavData();
  this.router.navigateByUrl('');
 
  
}

goSave = function() {
  this.loader.clickLoader();
  const formData: FormGroup = Object.assign({}, this.formPaymentData.value);
  this.propertyService.addPayment(formData).subscribe((Response: any) => {
    if (Response.message != null) {
      // console.log(Response);
      // alert(Response.message);
    }
  });
  // this.router.navigateByUrl('/reviewSubmit');
}

}
