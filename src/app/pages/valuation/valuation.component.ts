import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AppComponent } from '../../app.component';
import { NavigationService } from 'src/app/services/navigation.service';
 

@Component({
  selector: 'app-valuation',
  templateUrl: './valuation.component.html',
  styleUrls: ['./valuation.component.scss']
})
export class ValuationComponent implements OnInit {

  myForm:FormGroup;

  constructor(private router: Router, private valuation : NavigationService, private loader: AppComponent) { }

  ngOnInit(){

    this.myForm = new FormGroup({
      'is_property' : new FormControl(null, Validators.required),
      'field_Sel' : new FormControl(null, Validators.required),
      'contact_name' : new FormControl(null, Validators.required),
      'contact_number' : new FormControl(null, Validators.required),
      'r_u_purchasing' : new FormControl(null, Validators.required)
    }); 
  }
  // occupantsSolitor = function () {
  //   this.router.navigateByUrl('/otherOccupants'); 
    
  // }

  onSubmit() {    
    this.loader.clickLoader();
    this.router.navigateByUrl('/otherOccupants');
    this.valuation.getValuationData(this.myForm); 
  }
}
