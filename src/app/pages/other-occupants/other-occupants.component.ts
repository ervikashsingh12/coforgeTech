import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from 'src/app/services/navigation.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-other-occupants',
  templateUrl: './other-occupants.component.html',
  styleUrls: ['./other-occupants.component.scss']
})
export class OtherOccupantsComponent implements OnInit {
  occupantsform: FormGroup;

 
  constructor(private router : Router,private navigationService: NavigationService, private loader: AppComponent) { }

  ngOnInit(): void {
    this.createForm();
  }

  goPaymentDetails = function () {
    this.router.navigateByUrl('/paymantDetails');
  };

  private createForm() {
    this.occupantsform= new FormGroup({
      'personWithAgelessThen17': new FormControl(null,Validators.required),
      'satanderApprovedSolicitor': new FormControl(null,Validators.required),
      'withSolicitor': new FormControl(null,Validators.required),
    });
  }
  submitFunc() {
    this.loader.clickLoader();
    this.navigationService.getDataFromOccupants(this.occupantsform);
    this.goPaymentDetails();
 }

}



