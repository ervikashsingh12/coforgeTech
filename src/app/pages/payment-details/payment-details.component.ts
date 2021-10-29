import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { NavigationService} from 'src/app/services/navigation.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(private paymentService: NavigationService, private router: Router, private formBuilder: FormBuilder, private loader: AppComponent ) { }

  addForm: FormGroup;

  ngOnInit(): void {
    this.addForm = new FormGroup({
      'accountHolderName' : new FormControl(null, Validators.required),
      'accountNumber' : new FormControl(null, Validators.required),
      'currentCircumstances' : new FormControl(null, Validators.required),
      'dayOfPayment' : new FormControl(null, Validators.required),
      'sortCode' : new FormControl(null, Validators.required),
      'userId' : new FormControl(null, Validators.required),
    }); 
  }

    // this.addForm = this.formBuilder.group({
    //   accountHolderName: ['', Validators.required],
    //   accountNumber: ['', Validators.required],
    //   currentCircumstances: ['', Validators.required],
    //   dayOfPayment: ['', Validators.required],
    //   sortCode: ['', Validators.required],
    //   userId: [sessionStorage.getItem('userId')]
    // });
  

  // gosubmit = function() {
  //   this.loader.clickLoader();
  //   const formData: FormGroup = Object.assign({}, this.addForm.value);
  //   this.paymentService.addPayment(formData).subscribe((Response: any) => {
  //     if (Response.message != null) {
  //       // console.log(Response);
  //       // alert(Response.message)
  //       this.router.navigate(['/reviewSubmit']);
  //     }
  //   });
  //   // this.router.navigateByUrl('/reviewSubmit');
  // }

  gosubmit() {    
    this.loader.clickLoader();
    this.router.navigateByUrl('/reviewSubmit');
    this.paymentService.getPaymentData(this.addForm);
    
     
  }

}
