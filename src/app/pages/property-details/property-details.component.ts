import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { AppComponent } from '../../app.component';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
  propertyForm: FormGroup;

  constructor(private propertyService: NavigationService, private router: Router, private formBuilder: FormBuilder, private loader: AppComponent)  { }

  ngOnInit(): void {
    this.propertyForm = new FormGroup({
      'isPropertyCovered' : new FormControl(null, Validators.required),
      'numberOfBedrooms' : new FormControl(null, Validators.required),
      'postCode' : new FormControl(null, Validators.required),
      'propertyAddress' : new FormControl(null, Validators.required),
      'propertyAge' : new FormControl(null, Validators.required),
      'propertyBuilt' : new FormControl(null, Validators.required),
      'propertyId' : new FormControl(null, Validators.required),
      'propertyType' : new FormControl(null, Validators.required),
      'tenureType' : new FormControl(null, Validators.required),
      'userId' : new FormControl(null, Validators.required)
      
    });


    // this.propertyForm=this.formBuilder.group({
    //   isPropertyCovered:['', Validators.required],
    //   numberOfBedrooms: ['', Validators.required],
    //   postCode: ['', Validators.required],
    //   propertyAddress: ['', Validators.required],
    //   propertyAge: ['', Validators.required],
    //   propertyBuilt: ['', Validators.required],
    //   propertyId: ['123', Validators.required],
    //   propertyType: ['', Validators.required],
    //   tenureType:['', Validators.required],
    //   userId: [sessionStorage.getItem('userId')]
    // });
    
  }

  govaluation= function () {
    this.loader.clickLoader();
    this.router.navigateByUrl('/valuation');
};

// submitFunc() {
//   this.loader.clickLoader();
//   //  this.navigationService.getDataFromPropertyDetails(this.propertForm);
//   const formData: FormGroup = Object.assign({}, this.propertyForm.value);
//   console.log(formData);

//   this.propertyService.addProperty(formData).subscribe((Response: any) => {
//     if (Response.message != null) {
//       console.log(Response);
//       alert(Response.message)
//       this.router.navigate(['/valuation']);
//     }
//   });  
// }
submitFunc(){
      
    this.loader.clickLoader();
    this.router.navigate(['/valuation']);
    this.propertyService.getPropertyData(this.propertyForm);
    
  
}
}

