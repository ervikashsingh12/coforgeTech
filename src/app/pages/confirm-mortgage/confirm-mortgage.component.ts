import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-confirm-mortgage',
  templateUrl: './confirm-mortgage.component.html',
  styleUrls: ['./confirm-mortgage.component.scss']
})
export class ConfirmMortgageComponent implements OnInit {

  constructor( private router : Router, private loader: AppComponent,) { }

  disabledAgreement: boolean = true;
  disablAgreement:boolean=true;
changeCheck(event){
  this.disablAgreement = !event.checked;
}
changeChecked(event){
  this.disabledAgreement = !event.checked;
}
disablebtn(){
  this.changeCheck(event);
  this.changeChecked(event)

}

  ngOnInit(): void {
  }

  saveandback= function () {
    this.loader.clickLoader();
    this.router.navigateByUrl('/mortgageoptions');
};

goproperty= function () {
  this.loader.clickLoader();
  this.router.navigateByUrl('/details');
};

}
